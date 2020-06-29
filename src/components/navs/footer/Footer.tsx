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
    title: 'Packages',
    fields: [
      {
        name: 'Instagram Growth',
        route: '/products/instagram',
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
      {
        name: 'Growth Slot',
        route: '/products/growth-slot',
      },
    ],
  },
  {
    title: 'Other',
    fields: [
      {
        name: 'Growth Results',
        route: '/growth/results',
      },
      {
        name: 'Memberships',
        route: '/memberships',
      },
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <div className="mt-12 py-16 px-24 text-center sm:text-left">
      <div className="flex justify-between flex-wrap mb-6">
        <div className="w-full flex flex-col items-center justify-center mr-3 mb-5 sm:w-auto sm:mb-0 sm:block">
          <img width={200} src={logo} alt="Logo" />
          <FooterSocials />
          <p className="mt-4">
            Developed by{' '}
            <a
              className="underline"
              target="_blank"
              rel="noreferrer noopener"
              href="https://alonlivne.dev"
            >
              Alon Livne
            </a>
          </p>
        </div>
        {footerNavLists.map(footerNavList => (
          <FooterNavList key={footerNavList.title} {...footerNavList} />
        ))}
      </div>
    </div>
  );
};

export default Footer;
