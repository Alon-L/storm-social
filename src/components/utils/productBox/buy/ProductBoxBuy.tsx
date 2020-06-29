import React from 'react';
import { ProductStruct } from '../../../products';
import BuyButton from '../../BuyButton';
import ProductBoxContainer from '../ProductBoxContainer';
import ProductBoxContent, {
  ProductBoxContentProps,
} from '../ProductBoxContent';

export type ProductBoxBuyProps = ProductBoxContentProps &
  ProductStruct & {
    price: number;
  };

const ProductBoxBuy: React.FC<ProductBoxBuyProps> = (
  props: ProductBoxBuyProps,
) => {
  const { price } = props;

  return (
    <ProductBoxContainer>
      <ProductBoxContent {...props}>
        <>
          <BuyButton className="btn mt-6 px-12" {...props} />
          <span className="text-sm block mt-2 opacity-75">
            {price.toLocaleString()} USD
          </span>
        </>
      </ProductBoxContent>
    </ProductBoxContainer>
  );
};

export default ProductBoxBuy;
