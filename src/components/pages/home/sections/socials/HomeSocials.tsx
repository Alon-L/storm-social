import React from 'react';
import HomeSocialsDots from './HomeSocialsDots';
import followers10k from '../../../../../assets/home/socials/followers_10k.png';
import followers25k from '../../../../../assets/home/socials/followers_25k.png';
import followers5k from '../../../../../assets/home/socials/followers_5k.png';
import forbes from '../../../../../assets/home/socials/forbes.png';
import tiktok from '../../../../../assets/home/socials/tiktok.png';
import verified from '../../../../../assets/home/socials/verified.png';
import Social, { SocialProps } from '../../../../utils/socials/Social';
import SocialSlider from '../../../../utils/socials/SocialSlider';

const homeSocials: SocialProps[] = [
  {
    route: '/products/verified',
    title: 'Verified',
    desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    src: verified,
  },
  {
    route: '/products/forbes',
    title: 'Forbes',
    desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    src: forbes,
  },
  {
    route: '/products/tiktok',
    title: 'TikTok',
    desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    src: tiktok,
  },
  {
    route: '/products/followers',
    title: '+5,000 Followers',
    desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    src: followers5k,
  },
  {
    route: '/products/followers',
    title: '+10,000 Followers',
    desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    src: followers10k,
  },
  {
    route: '/products/followers',
    title: '+25,000 Followers',
    desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    src: followers25k,
  },
];

const HomeSocials: React.FC = () => {
  return (
    <section className="overflow-hidden">
      <div className="container py-12 text-center">
        <div className="py-6">
          <h2 className="text-4xl font-semibold">Grow Your Social</h2>
          <p>Do not wait for tomorrow - start a new life today</p>
        </div>
        <div className="relative flex justify-center items-center flex-wrap mb-12 lg:-mx-10">
          <HomeSocialsDots className="top-0 right-0 translate-x-24 -translate-y-24" />
          {homeSocials.map(social => (
            <Social key={social.title} {...social} />
          ))}
          <SocialSlider />
          <HomeSocialsDots className="bottom-0 left-0 -translate-x-24 translate-y-24" />
        </div>
      </div>
    </section>
  );
};

export default HomeSocials;
