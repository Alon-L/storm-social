import React from 'react';
import { Link } from 'react-router-dom';

export interface FooterNavListProps {
  title: string;
  fields: {
    name: string;
    route: string;
  }[];
}

const FooterNavList: React.FC<FooterNavListProps> = (
  props: FooterNavListProps,
) => {
  const { title, fields } = props;

  return (
    <div className="m-3 text-center w-full lg:w-1/12 md:w-2/12 sm:w-4/12 sm:text-left">
      <h5 className="font-semibold mb-2">{title}</h5>
      <ul>
        {fields.map(({ name, route }) => (
          <li key={name}>
            <Link className="hover:underline text-sm" to={route}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterNavList;
