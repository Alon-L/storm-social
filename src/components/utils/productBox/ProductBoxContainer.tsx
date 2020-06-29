import React, { PropsWithChildren } from 'react';

const ProductBoxContainer: React.FC = (props: PropsWithChildren<unknown>) => {
  const { children } = props;

  return (
    <div className="flex z-10 w-full lg:w-1/3 md:px-10 py-6">{children}</div>
  );
};

export default ProductBoxContainer;
