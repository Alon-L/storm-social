import React from 'react';
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
  return (
    <div className="flex justify-between -mx-6">
      {navbarItems.map(item => (
        <NavbarItem
          key={item.type !== NavbarItemType.Image ? item.name : item.alt}
          {...item}
        />
      ))}
    </div>
  );
};

export default Navbar;
