import React from 'react';
import { Link } from 'react-router-dom';

export interface HomeSocialProps {
  route: string;
  title: string;
  desc: string;
  src: string;
}

const HomeSocial: React.FC<HomeSocialProps> = (props: HomeSocialProps) => {
  const { route, title, desc, src } = props;

  return (
    <div className="z-10 w-full lg:w-1/3 px-10 py-6">
      <Link to={route}>
        <div className="transition-transform duration-200 ease-in-out transform hover:-translate-y-5 bg-white shadow-soft-xl rounded-lg p-5 flex justify-center flex-col items-center">
          <img className="rounded" width={140} src={src} alt="title" />
          <h3 className="mt-3 text-xl font-semibold">{title}</h3>
          <p className="mt-3">{desc}</p>
        </div>
      </Link>
    </div>
  );
};

export default HomeSocial;
