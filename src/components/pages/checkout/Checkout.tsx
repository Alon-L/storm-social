import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import CheckoutForm, { CheckoutFormFields } from './CheckoutForm';
import CheckoutInvalid from './CheckoutInvalid';
import CheckoutSummary from './CheckoutSummary';
import createCheckoutURL from '../../../utils/shopify/createCheckoutURL';
import getProductId from '../../../utils/shopify/getProductId';
import { ProductImages } from '../../products';

const Checkout: React.FC = () => {
  const params = new URLSearchParams(useLocation().search);
  const query = params.get('query');
  const title = params.get('title') || '';
  const image =
    ProductImages[(params.get('image') || '') as keyof typeof ProductImages];
  const price = parseFloat(params.get('price') || '0');
  const quantity = parseInt(params.get('quantity') || '1', 10);

  const [id, setId] = useState<string | number | null>('');

  // Find product ID
  useEffect(() => {
    if (query) {
      getProductId(query).then(productId => {
        setId(productId);
      });
    } else {
      setId(null);
    }
  }, [query]);

  const onSubmit = (fields: CheckoutFormFields): void => {
    if (!id) throw new Error('Invalid product ID');
    createCheckoutURL(id, quantity, fields.email, fields).then(
      url => (window.location.href = url),
    );
  };

  return id !== undefined ? (
    <div className="container">
      {query ? (
        <div className="flex flex-wrap">
          <div className="w-full mb-16 lg:w-1/2 lg:mb-0">
            <h3 className="text-2xl font-semibold mb-8">Order Summary</h3>
            <CheckoutSummary title={title} image={image} price={price} />
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-8">
              Please fill the missing information:
            </h3>
            <CheckoutForm onSubmit={onSubmit} />
          </div>
        </div>
      ) : (
        <CheckoutInvalid />
      )}
    </div>
  ) : null;
};

export default Checkout;
