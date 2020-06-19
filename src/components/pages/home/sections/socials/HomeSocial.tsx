import React from 'react';

export interface HomeSocialProps {
  title: string;
  desc: string;
  src: string;
}

const HomeSocial: React.FC<HomeSocialProps> = (props: HomeSocialProps) => {
  const { title, desc, src } = props;

  return (
    <div className="z-10 lg:w-1/3 px-10 py-6">
      <div className="bg-white shadow-soft-xl rounded-lg p-5 flex justify-center flex-col items-center">
        <img className="rounded" width={140} src={src} alt="title" />
        <h3 className="mt-3 text-xl font-semibold">{title}</h3>
        <p className="mt-3">{desc}</p>
      </div>
    </div>
  );
};

export default HomeSocial;
