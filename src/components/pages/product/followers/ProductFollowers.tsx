import React from 'react';
import followers10k from '../../../../assets/socials/followers_10k.png';
import followers25k from '../../../../assets/socials/followers_25k.png';
import followers5k from '../../../../assets/socials/followers_5k.png';
import { ProductNames, ProductQuery } from '../../../../products';
import FollowersSlider from '../../../utils/FollowersSlider';
import ProductBoxBuy, {
  ProductBoxBuyProps,
} from '../../../utils/productBox/buy/ProductBoxBuy';

const socials: ProductBoxBuyProps[] = [
  {
    title: '+5,000 Followers',
    desc:
      'Within the month you will receive 5,000 organic Instagram followers to your desired Instagram account.',
    src: followers5k,
    price: 299.99,
    image: ProductNames.Followers5K,
    query: ProductQuery.Followers,
    quantity: 5,
  },
  {
    title: '+10,000 Followers',
    desc:
      'Within the month you will receive 10,000 organic Instagram followers to your desired Instagram account.\n',
    src: followers10k,
    price: 499.99,
    image: ProductNames.Followers10K,
    query: ProductQuery.Followers,
    quantity: 10,
  },
  {
    title: '+25,000 Followers',
    desc:
      'Within the month you will receive 25,000 organic Instagram followers to your desired Instagram account.\n',
    src: followers25k,
    price: 999.99,
    image: ProductNames.Followers25K,
    query: ProductQuery.Followers,
    quantity: 25,
  },
];

const ProductFollowers: React.FC = () => {
  return (
    <div className="container text-center">
      <div className="mb-12 w-4/5 mx-auto">
        <h1 className="text-3xl font-semibold mb-3">Organic Growth</h1>
        <p>
          Here at Storm Social we provide 100% Organic Growth through our
          instagram network. These followers are all REAL! & not bot accounts.
          This is the best way to grow your influencer or business account to
          build your online presence!
        </p>
      </div>
      <div className="flex justify-center items-center flex-wrap mb-12 lg:-mx-10">
        {socials.map(social => (
          <ProductBoxBuy key={social.title} {...social} />
        ))}
        <FollowersSlider />
      </div>
    </div>
  );
};

export default ProductFollowers;
