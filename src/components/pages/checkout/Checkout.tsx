import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import CheckoutInvalid from './CheckoutInvalid';
import CheckoutSummary from './CheckoutSummary';
import Shopify from '../../../utils/Shopify';
import { ProductImages } from '../../products';

const client = Shopify.getInstance();

const Checkout: React.FC = () => {
  const params = new URLSearchParams(useLocation().search);
  const query = params.get('query');
  const title = params.get('title') || '';
  const image =
    ProductImages[(params.get('image') || '') as keyof typeof ProductImages];
  const price = parseFloat(params.get('price') || '0');
  const quantity = parseInt(params.get('quantity') || '1', 10);

  console.log(query);

  const [id, setId] = useState<string | number | null>('');

  // Find product ID
  useEffect(() => {
    if (query) {
      client.product
        .fetchQuery({
          first: 1,
          query,
          sortBy: 'PRICE',
        })
        .then(products => {
          if (!products || !products.length) return;
          setId(products[0].id);
        });
    } else {
      setId(null);
    }
  }, [query]);

  return id !== undefined ? (
    <div className="container">
      {query ? (
        <div className="flex flex-wrap">
          <div className="lg:w-1/2 w-full">
            <h3 className="text-2xl font-semibold">Order Summary</h3>
            <CheckoutSummary title={title} image={image} price={price} />
          </div>
          <div className="lg:w-1/2 w-full">
            <h3 className="text-2xl font-semibold mb-8">
              Please fill the missing information:
            </h3>
            <CheckoutForm />
          </div>
        </div>
      ) : (
        <CheckoutInvalid />
      )}
    </div>
  ) : null;
};

export default Checkout;
