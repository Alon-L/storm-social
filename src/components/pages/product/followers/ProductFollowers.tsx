import React from 'react';
import followers10k from '../../../../assets/socials/followers_10k.png';
import followers25k from '../../../../assets/socials/followers_25k.png';
import followers5k from '../../../../assets/socials/followers_5k.png';
import Social, { SocialProps } from '../../../utils/socials/Social';
import SocialSlider from '../../../utils/socials/SocialSlider';

const socials: SocialProps[] = [
  {
    route: '#',
    title: '+5,000 Followers',
    desc:
      'Within the month you will receive 5,000 organic Instagram followers to your desired Instagram account.',
    src: followers5k,
    button: {
      url: '#',
    },
    price: 299.99,
  },
  {
    route: '#',
    title: '+10,000 Followers',
    desc:
      'Within the month you will receive 10,000 organic Instagram followers to your desired Instagram account.\n',
    src: followers10k,
    button: {
      url: '#',
    },
    price: 499.99,
  },
  {
    route: '#',
    title: '+25,000 Followers',
    desc:
      'Within the month you will receive 25,000 organic Instagram followers to your desired Instagram account.\n',
    src: followers25k,
    button: {
      url: '#',
    },
    price: 999.99,
  },
];

const ProductFollowers: React.FC = () => {
  return (
    <div className="container text-center">
      <div className="mb-12 w-4/5 mx-auto">
        <h1 className="text-3xl font-semibold mb-3">Organic Growth</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
          officia, perferendis porro quisquam quo voluptatem! Cum, cumque
          dignissimos earum, facilis libero magnam magni nam nostrum odio
          reprehenderit sunt, veniam vitae.
        </p>
      </div>
      <div className="flex justify-center items-center flex-wrap mb-12 lg:-mx-10">
        {socials.map(social => (
          <Social key={social.title} {...social} />
        ))}
        <SocialSlider />
      </div>
    </div>
  );
};

export default ProductFollowers;
