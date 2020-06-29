import React from 'react';
import ProductContent from './ProductContent';
import { ProductStruct } from '../../products';

export interface ProductProps extends ProductStruct {
  desc: string;
  readyToOrder: string;
  pageImage?: string;
}

const ProductPage: React.FC<ProductProps> = (props: ProductProps) => {
  return (
    <div className="container text-center">
      <div className="lg:w-3/5 mx-auto">
        <ProductContent {...props} />
      </div>
    </div>
  );
};

export default ProductPage;
