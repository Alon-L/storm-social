import React from 'react';
import ProductContent from './ProductContent';
import { articles } from '../../../products';

const ProductArticles: React.FC = () => {
  return (
    <div className="container flex justify-between text-center lg:flex-row flex-col">
      {articles.map(article => (
        <div
          key={article.title}
          className="
        w-full mb-24 lg:w-2/5 lg:mb-0"
        >
          <ProductContent {...article} />
        </div>
      ))}
    </div>
  );
};

export default ProductArticles;
