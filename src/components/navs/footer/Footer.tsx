import React from 'react';
import FooterNav from './nav/FooterNav';
import FooterSocials from './socials/FooterSocials';

const Footer: React.FC = () => {
  return (
    <div className="mt-12 py-16 px-24">
      <FooterNav />
      <FooterSocials />
    </div>
  );
};

export default Footer;
