import React from 'react';
import { ProductProps } from './Product';
import ProductContent from './ProductContent';
import featuredArticles from '../../../assets/products/featuredArticles.jpg';
import forbes from '../../../assets/products/forbes.png';

const articles: ProductProps[] = [
  {
    title: 'Forbes',
    desc:
      'The Forbes article is the most prestigious article out there boosting your social media presence.',
    readyToOrder:
      'By purchasing this package Storm Social will secure you a Forbes article.',
    price: 4999.99,
    src: forbes,
  },
  {
    title: 'Featured Articles',
    desc:
      'This boosts your online recognition & social media presence. Articles are also required in order to receive <a class="underline" href="/products/verification">Instagram Verification</a>',
    readyToOrder:
      'By purchasing this service storm social will provide you with a mainstream featured article of your choice.',
    price: 1999.99,
    src: featuredArticles,
  },
];

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
