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
    <div className="mt-4 w-full lg:w-1/12 md:w-2/12 sm:w-1/3">
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
