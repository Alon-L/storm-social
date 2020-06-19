import React, { useState } from 'react';
import NavbarItem, { NavbarItemProps, NavbarItemType } from './NavbarItem';
import logo from '../../../assets/logo.png';

const navbarItems: NavbarItemProps[] = [
  {
    type: NavbarItemType.Route,
    name: 'Home',
    route: '/',
  },
  {
    type: NavbarItemType.Route,
    name: 'About Us',
    route: 'about',
  },
  {
    type: NavbarItemType.Dropdown,
    name: 'Giveaways',
  },
  {
    type: NavbarItemType.Image,
    src: logo,
    alt: 'Logo',
  },
  {
    type: NavbarItemType.Dropdown,
    name: 'Growth',
  },
  {
    type: NavbarItemType.Dropdown,
    name: 'Packages',
  },
  {
    type: NavbarItemType.Route,
    name: 'Members',
    route: 'memberships',
  },
];

const Navbar: React.FC = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="container mx-auto">
      <nav className="flex flex-row-reverse justify-between flex-no-wrap py-6 lg:flex-row lg:justify-around lg:py-0">
        <div className="inline-block lg:hidden">
          <button
            className={`hamburger hamburger--collapse -mt-2 ${
              active && 'is-active'
            }`}
            type="button"
            onClick={() => setActive(!active)}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
        </div>
        <div
          className={`-mt-6 lg:mt-0 overflow-hidden transition-all duration-200 ease-in-out transform ml-4 lg:ml-4 ${
            !active && 'hidden'
          } lg:flex lg:justify-between lg:w-full`}
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
