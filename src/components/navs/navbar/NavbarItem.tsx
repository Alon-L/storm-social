import React, { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import NavbarDropdown from './NavbarDropdown';

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
  routes: {
    name: string;
    route: string;
  }[];
}

export interface NavbarItemImage {
  type: NavbarItemType.Image;
  src: string;
  alt: string;
  route: string;
}

export type NavbarItemProps =
  | NavbarItemRoute
  | NavbarItemDropdown
  | NavbarItemImage;

const NavbarItemWrapper: React.FC = (props: PropsWithChildren<unknown>) => {
  const { children } = props;

  return (
    <div className="my-6 lg:m-6 uppercase font-semibold flex flex-col justify-center">
      {children}
    </div>
  );
};

const NavbarItem: React.FC<NavbarItemProps> = (props: NavbarItemProps) => {
  switch (props.type) {
    case NavbarItemType.Route:
      return (
        <NavbarItemWrapper>
          <Link
            className="text-sm opacity-70 hover:opacity-100 transition-opacity duration-200 ease-in-out"
            to={props.route}
          >
            {props.name}
          </Link>
        </NavbarItemWrapper>
      );
    case NavbarItemType.Dropdown:
      return (
        <NavbarItemWrapper>
          <NavbarDropdown name={props.name}>
            <div className="flex flex-col">
              {props.routes.map(({ name, route }) => (
                <Link
                  className="text-sm py-5 px-5 opacity-70 hover:opacity-100 transition-opacity duration-200 ease-in-out whitespace-no-wrap border-b-1 border-gray-300"
                  key={name}
                  to={route}
                >
                  {name}
                </Link>
              ))}
            </div>
          </NavbarDropdown>
        </NavbarItemWrapper>
      );
    default:
      return (
        <div className="lg:m-6 lg:block hidden">
          <Link to={props.route}>
            <img width={250} src={props.src} alt={props.alt} />
          </Link>
        </div>
      );
  }
};

export default NavbarItem;
