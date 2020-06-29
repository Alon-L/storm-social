import React, { PropsWithChildren } from 'react';

export interface ProductBoxContentProps {
  title: string;
  src: string;
  desc: string;
  className?: string;
}

const ProductBoxContent: React.FC<ProductBoxContentProps> = (
  props: PropsWithChildren<ProductBoxContentProps>,
) => {
  const { children, title, desc, src, className } = props;

  return (
    <div
      className={`bg-white shadow-soft-xl rounded-lg p-5 flex  flex-col items-center ${className}`}
    >
      <img className="rounded" width={140} src={src} alt="title" />
      <h3 className="mt-3 text-xl font-semibold">{title}</h3>
      <p className="mt-3 whitespace-pre-line">{desc}</p>
      {children}
    </div>
  );
};

export default ProductBoxContent;
