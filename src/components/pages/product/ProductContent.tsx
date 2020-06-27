import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import { ProductProps } from './Product';

const ProductContent: React.FC<ProductProps> = (props: ProductProps) => {
  const { title, desc, src, price, readyToOrder } = props;

  return (
    <>
      <div className="mb-16">
        <h1 className="text-3xl font-bold mb-3">{title}</h1>
        <ReactMarkdown source={desc} escapeHtml={false} />
      </div>
      <div className="mb-16">
        <img width={350} className="mx-auto" src={src} alt={title} />
      </div>
      <button type="button" className="btn px-16">
        Buy Now!
      </button>
      <span className="text-sm block mt-2 opacity-75">
        {price.toLocaleString()} USD
      </span>
      <div className="mt-16">
        <h1 className="text-3xl font-semibold mb-3">Ready to order?</h1>
        <ReactMarkdown source={readyToOrder} escapeHtml={false} />
      </div>
    </>
  );
};

export default ProductContent;
