import React from 'react';

export interface SocialContentProps {
  title: string;
  desc: string;
  src: string;
  button?: {
    url: string;
  };
  price?: number;
}

const SocialContent: React.FC<SocialContentProps> = (
  props: SocialContentProps,
) => {
  const { title, desc, src, button, price } = props;

  return (
    <div
      className={`bg-white shadow-soft-xl rounded-lg p-5 flex justify-center flex-col items-center ${
        !button &&
        'transition-transform duration-200 ease-in-out transform hover:-translate-y-4'
      }`}
    >
      <img className="rounded" width={140} src={src} alt="title" />
      <h3 className="mt-3 text-xl font-semibold">{title}</h3>
      <p className="mt-3 whitespace-pre-line">{desc}</p>
      {button && price && (
        <>
          <a href={button.url} className="btn mt-6 px-12">
            Buy Now!
          </a>
          <span className="text-sm block mt-2 opacity-75">
            {price.toLocaleString()} USD
          </span>
        </>
      )}
    </div>
  );
};

export default SocialContent;
