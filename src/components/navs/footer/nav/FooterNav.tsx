import React from 'react';
import FooterNavList, { FooterNavListProps } from './FooterNavList';
import logo from '../../../../assets/logo.png';

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
        route: '/giveaway/current',
      },
      {
        name: 'Previous Giveaway',
        route: '/giveaway/previous',
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
        name: 'Verification',
        route: '/products/verification',
      },
      {
        name: 'Forbes',
        route: '/products/forbes',
      },
      {
        name: 'TikTok',
        route: '/products/tiktok',
      },
      {
        name: 'Instagram Followers',
        route: '/products/followers',
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

const FooterNav: React.FC = () => {
  return (
    <div className="flex justify-between flex-wrap mb-6">
      <div className="w-full flex sm:w-auto sm:block justify-center">
        <img width={200} src={logo} alt="Logo" />
      </div>
      {footerNavLists.map(footerNavList => (
        <FooterNavList key={footerNavList.title} {...footerNavList} />
      ))}
    </div>
  );
};

export default FooterNav;
