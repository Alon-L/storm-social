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
        name: 'Verified',
        route: '/packages/verified',
      },
      {
        name: 'Forbes',
        route: '/packages/forbes',
      },
      {
        name: 'TikTok',
        route: '/packages/tiktok',
      },
      {
        name: 'Instagram Followers',
        route: '/packages/followers',
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