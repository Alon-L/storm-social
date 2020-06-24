import React from 'react';

export interface ProductProps {
  title: string;
  desc: string;
  src: string;
  price: number;
  readyToOrder: string;
}

const Product: React.FC<ProductProps> = (props: ProductProps) => {
  const { title, desc, src, price, readyToOrder } = props;

  return (
    <div className="container text-center">
      <div className="lg:w-3/5 mx-auto">
        <div className="mb-16">
          <h1 className="text-3xl font-bold mb-3">{title}</h1>
          <p>{desc}</p>
        </div>
        <div className="mb-16">
          <img width={350} className="mx-auto" src={src} alt={title} />
        </div>
        <button type="button" className="btn px-16">
          Buy Now!
        </button>
        <span className="text-sm block mt-2 opacity-75">
          USD {price.toLocaleString()}
        </span>
        <div className="mt-16">
          <h1 className="text-3xl font-semibold mb-3">Ready to order?</h1>
          <p>{readyToOrder}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
