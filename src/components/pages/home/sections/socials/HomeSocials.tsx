import React from 'react';
import HomeSocial, { HomeSocialProps } from './HomeSocial';
import HomeSocialSlider from './HomeSocialSlider';
import HomeSocialsDots from './HomeSocialsDots';
import followers10k from '../../../../../assets/home/socials/followers_10k.png';
import followers25k from '../../../../../assets/home/socials/followers_25k.png';
import followers5k from '../../../../../assets/home/socials/followers_5k.png';
import forbes from '../../../../../assets/home/socials/forbes.png';
import tiktok from '../../../../../assets/home/socials/tiktok.png';
import verified from '../../../../../assets/home/socials/verified.png';

const homeSocials: HomeSocialProps[] = [
  {
    title: 'Verified',
    desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    src: verified,
  },
  {
    title: 'Forbes',
    desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    src: forbes,
  },
  {
    title: 'TikTok',
    desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    src: tiktok,
  },
  {
    title: '+5,000 Followers',
    desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    src: followers5k,
  },
  {
    title: '+10,000 Followers',
    desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    src: followers10k,
  },
  {
    title: '+25,000 Followers',
    desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    src: followers25k,
  },
];

const HomeSocials: React.FC = () => {
  return (
    <section>
      <div className="container mx-auto py-12 text-center">
        <div className="py-6">
          <h2 className="text-4xl font-semibold">Grow Your Social</h2>
          <p>Do not wait for tomorrow - start a new life today</p>
        </div>
        <div className="home--socials relative flex justify-between items-center flex-wrap">
          <HomeSocialsDots className="top-0 right-0 translate-x-16 -translate-y-16" />
          {homeSocials.map(social => (
            <HomeSocial key={social.title} {...social} />
          ))}
          <HomeSocialSlider />
          <HomeSocialsDots className="bottom-0 left-0 -translate-x-16 translate-y-16" />
        </div>
      </div>
    </section>
  );
};

export default HomeSocials;
