import React, { useState } from 'react';
import NavbarItem, { NavbarItemProps, NavbarItemType } from './NavbarItem';
import logo from '../../../assets/logo.png';
import logoWhite from '../../../assets/logo_white.png';

export enum NavbarTheme {
  Light,
  Dark,
}

interface NavbarProps {
  theme?: NavbarTheme;
}

const Navbar: React.FC<NavbarProps> = (props: NavbarProps) => {
  const { theme = NavbarTheme.Dark } = props;

  const [active, setActive] = useState(false);

  const navbarItems: NavbarItemProps[] = [
    {
      type: NavbarItemType.Route,
      name: 'Home',
      route: '/',
    },
    {
      type: NavbarItemType.Route,
      name: 'About Us',
      route: '/about',
    },
    {
      type: NavbarItemType.Dropdown,
      name: 'Giveaways',
      routes: [
        {
          name: 'Current Giveaway',
          route: '/giveaways/current',
        },
        { name: 'Previous Giveaway', route: '/giveaways/previous' },
      ],
    },
    {
      type: NavbarItemType.Image,
      src: theme === NavbarTheme.Light ? logoWhite : logo,
      alt: 'Logo',
    },
    {
      type: NavbarItemType.Dropdown,
      name: 'Growth',
      routes: [
        { name: 'Organic Growth', route: '/growth/organic' },
        { name: 'Growth Results', route: '/growth/results' },
      ],
    },
    {
      type: NavbarItemType.Dropdown,
      name: 'Products',
      routes: [
        { name: 'Instagram Followers', route: '/products/followers' },
        { name: 'Verification', route: '/products/verification' },
        { name: 'Articles', route: '/products/articles' },
        { name: 'TikTok', route: '/products/tiktok' },
      ],
    },
    {
      type: NavbarItemType.Route,
      name: 'Members',
      route: '/memberships',
    },
  ];

  return (
    <div className={`container ${theme === NavbarTheme.Light && 'text-white'}`}>
      <nav className="flex flex-row-reverse justify-between flex-no-wrap py-6 lg:flex-row lg:justify-around lg:py-0">
        <div className="inline-block lg:hidden">
          <button
            className={`hamburger hamburger--collapse -mt-2 ${
              active && 'is-active'
            } ${theme === NavbarTheme.Light && 'hamburger-white'}`}
            type="button"
            onClick={() => setActive(!active)}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
        </div>
        <div
          className={`-mt-6 transition-all duration-200 ease-in-out lg:mt-0 lg:flex lg:justify-center lg:w-full ${
            !active && 'hidden'
          }`}
        >
          {navbarItems.map(item => (
            <NavbarItem
              key={item.type !== NavbarItemType.Image ? item.name : item.alt}
              {...item}
            />
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
