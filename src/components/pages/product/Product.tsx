import React from 'react';
import Button from '../../utils/buttons/Button';

export interface ProductProps {
  title: string;
  desc: string;
  src: string;
  readyToOrder: string;
}

const Product: React.FC<ProductProps> = (props: ProductProps) => {
  const { title, desc, src, readyToOrder } = props;

  return (
    <div className="container text-center">
      <div className="lg:w-3/5 mx-auto">
        <div className="mb-32">
          <h1 className="text-3xl font-bold mb-3">{title}</h1>
          <p>{desc}</p>
        </div>
        <div className="mb-32">
          <img width={350} className="mx-auto" src={src} alt={title} />
        </div>
        <div className="mb-16">
          <h1 className="text-3xl font-semibold mb-3">Ready to order?</h1>
          <p>{readyToOrder}</p>
        </div>
        <Button href="#" className="px-16">
          Buy Now!
        </Button>
      </div>
    </div>
  );
};

export default Product;
