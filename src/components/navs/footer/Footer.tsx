import React from 'react';
import FooterNavList, { FooterNavListProps } from './nav/FooterNavList';
import FooterSocials from './socials/FooterSocials';
import logo from '../../../assets/logo.png';

const footerNavLists: FooterNavListProps[] = [
  {
    title: 'General',
    fields: [
      {
        name: 'Contact Us',
        route: '/contact',
      },
      {
        name: 'About Us',
        route: '/about',
      },
      {
        name: 'FAQ',
        route: '/faq',
      },
      {
        name: 'ToS',
        route: '/tos',
      },
    ],
  },
  {
    title: 'Giveaways',
    fields: [
      {
        name: 'Current Giveaway',
        route: '/giveaways/current',
      },
      {
        name: 'Previous Giveaway',
        route: '/giveaways/previous',
      },
    ],
  },
  {
    title: 'Growth',
    fields: [
      {
        name: 'Organic Growth',
        route: '/growth/organic',
      },
      {
        name: 'Growth Results',
        route: '/growth/results',
      },
    ],
  },
  {
    title: 'Packages',
    fields: [
      {
        name: 'Instagram Followers',
        route: '/products/followers',
      },
      {
        name: 'Verification',
        route: '/products/verification',
      },
      {
        name: 'Articles',
        route: '/products/articles',
      },
      {
        name: 'TikTok',
        route: '/products/tiktok',
      },
    ],
  },
  {
    title: 'Other',
    fields: [
      {
        name: 'Memberships',
        route: '/memberships',
      },
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <div className="mt-12 py-16 px-24">
      <div className="flex justify-between flex-wrap mb-6">
        <div className="w-full flex flex-col sm:mb-0 mb-5 sm:w-auto sm:block items-center justify-center">
          <img width={200} src={logo} alt="Logo" />
          <FooterSocials />
        </div>
        {footerNavLists.map(footerNavList => (
          <FooterNavList key={footerNavList.title} {...footerNavList} />
        ))}
      </div>
    </div>
  );
};

export default Footer;
