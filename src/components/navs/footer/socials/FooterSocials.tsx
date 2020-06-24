import {
  faInstagram,
  faTwitter,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/pro-solid-svg-icons';
import React from 'react';
import FooterSocial, { FooterSocialProps } from './FooterSocial';

const footerSocials: FooterSocialProps[] = [
  {
    url: 'https://instagram.com',
    icon: faInstagram,
  },
  {
    url: 'https://twitter.com',
    icon: faTwitter,
  },
  {
    url: 'https://facebook.com',
    icon: faFacebook,
  },
  {
    url: 'mailto:apple@seed.com',
    icon: faEnvelope,
  },
];

const FooterSocials: React.FC = () => {
  return (
    <div className="mt-3 flex justify-between sm:w-auto">
      {footerSocials.map(footerSocial => (
        <FooterSocial key={footerSocial.url} {...footerSocial} />
      ))}
    </div>
  );
};

export default FooterSocials;
