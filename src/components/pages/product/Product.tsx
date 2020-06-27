import React from 'react';
import ProductContent from './ProductContent';

export interface ProductProps {
  title: string;
  desc: string;
  src: string;
  price: number;
  readyToOrder: string;
}

const Product: React.FC<ProductProps> = (props: ProductProps) => {
  return (
    <div className="container text-center">
      <div className="lg:w-3/5 mx-auto">
        <ProductContent {...props} />
      </div>
    </div>
  );
};

export default Product;
