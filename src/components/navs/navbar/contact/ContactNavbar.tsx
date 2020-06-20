import React, { useState } from 'react';
import logo from '../../../../assets/logo.png';
import NavbarItem, { NavbarItemProps, NavbarItemType } from '../NavbarItem';

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
  },
  {
    type: NavbarItemType.Dropdown,
    name: 'Growth',
  },
];

const ContactNavbar: React.FC = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="px-16 fixed z-10 left-0 right-0 lg:bg-transparent bg-white">
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
          className={`-mt-6 lg:mt-0 overflow-hidden transition-all duration-200 ease-in-out transform ${
            !active && 'hidden'
          } lg:flex lg:justify-between lg:w-full`}
        >
          <div>
            <NavbarItem type={NavbarItemType.Image} src={logo} alt="Logo" />
          </div>
          <div className="lg:flex lg:justify-start lg:text-white lg:w-1/2 xl:pl-32 text-black">
            {navbarItems.map(item => (
              <NavbarItem
                key={item.type !== NavbarItemType.Image ? item.name : item.alt}
                {...item}
              />
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default ContactNavbar;
