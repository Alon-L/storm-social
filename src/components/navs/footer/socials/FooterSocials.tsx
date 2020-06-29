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
    url: 'https://www.instagram.com/stormsocial',
    icon: faInstagram,
  },
  {
    url: 'https://twitter.com/stormsocials',
    icon: faTwitter,
  },
  {
    url: 'https://www.facebook.com/Storm-Social',
    icon: faFacebook,
  },
  {
    url: 'mailto:contact@stormsocial.co',
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
