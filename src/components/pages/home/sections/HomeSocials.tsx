import React from 'react';
import followers10k from '../../../../assets/socials/followers_10k.png';
import followers25k from '../../../../assets/socials/followers_25k.png';
import followers5k from '../../../../assets/socials/followers_5k.png';
import forbes from '../../../../assets/socials/forbes.png';
import tiktok from '../../../../assets/socials/tiktok.png';
import verification from '../../../../assets/socials/verification.png';
import Social, { SocialProps } from '../../../utils/socials/Social';
import SocialSlider from '../../../utils/socials/SocialSlider';

const homeSocials: SocialProps[] = [
  {
    route: '/products/verification',
    title: 'Verification',
    desc:
      'Instagram Verification is the best way to establish your Brand or Influencer profile.',
    src: verification,
  },
  {
    route: '/products/artices',
    title: 'Articles',
    desc: 'This boosts your online recognition & social media presence.',
    src: forbes,
  },
  {
    route: '/products/tiktok',
    title: 'TikTok',
    desc:
      'Having access to to the TikTok Algorithm is the best way to increase your chances to be featured on the #foryoupage helping our clients to go viral!',
    src: tiktok,
  },
  {
    route: '/products/instagram',
    title: '+5,000 Followers',
    desc:
      'Receive 5,000 Instagram followers to your desired Instagram account.',
    src: followers5k,
  },
  {
    route: '/products/instagram',
    title: '+10,000 Followers',
    desc:
      'Receive 10,000 Instagram followers to your desired Instagram account.',
    src: followers10k,
  },
  {
    route: '/products/instagram',
    title: '+25,000 Followers',
    desc:
      'Receive 25,000 Instagram followers to your desired Instagram account.',
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
        <div className="relative flex justify-center items-stretch flex-wrap mb-12 lg:-mx-10">
          {homeSocials.map(social => (
            <Social key={social.title} {...social} />
          ))}
          <SocialSlider />
        </div>
      </div>
    </section>
  );
};

export default HomeSocials;
