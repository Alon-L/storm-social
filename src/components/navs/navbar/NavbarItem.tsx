import React, { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

export enum NavbarItemType {
  Route,
  Dropdown,
  Image,
}

export interface NavbarItemRoute {
  type: NavbarItemType.Route;
  name: string;
  route: string;
}

export interface NavbarItemDropdown {
  type: NavbarItemType.Dropdown;
  name: string;
}

export interface NavbarItemImage {
  type: NavbarItemType.Image;
  src: string;
  alt: string;
}

export type NavbarItemProps =
  | NavbarItemRoute
  | NavbarItemDropdown
  | NavbarItemImage;

const NavbarItemWrapper: React.FC = (props: PropsWithChildren<unknown>) => {
  return (
    <div className="my-6 lg:m-6 uppercase font-semibold flex flex-col justify-center">
      {props.children}
    </div>
  );
};

const NavbarItem: React.FC<NavbarItemProps> = (props: NavbarItemProps) => {
  switch (props.type) {
    case NavbarItemType.Route:
      return (
        <NavbarItemWrapper>
          <Link
            className="text-sm opacity-80 hover:opacity-100 transition-opacity duration-200 ease-in-out"
            to={props.route}
          >
            {props.name}
          </Link>
        </NavbarItemWrapper>
      );
    case NavbarItemType.Dropdown:
      // TODO: Implement dropdown
      return (
        <NavbarItemWrapper>
          <Link
            className="text-sm opacity-80 hover:opacity-100 transition-opacity duration-200 ease-in-out"
            to={props.name}
          >
            {props.name}
          </Link>
        </NavbarItemWrapper>
      );
    default:
      return (
        <div className="lg:m-6 lg:block hidden">
          <img style={{ maxWidth: 250 }} src={props.src} alt={props.alt} />
        </div>
      );
  }
};

export default NavbarItem;
