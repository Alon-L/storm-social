import React, { ComponentProps, PropsWithChildren } from 'react';

const ButtonOutline: React.FC<ComponentProps<'a'>> = (
  props: PropsWithChildren<ComponentProps<'a'>>,
) => {
  const { className, children } = props;

  return (
    <a
      {...props}
      className={`font-medium border-3 transition-all duration-200 ease-in-out border-primary-500 hover:border-primary-700 text-brand-500 hover:text-brand-700 uppercase py-2 px-6 rounded-lg bg-white ${
        className || ''
      }`}
      type="button"
    >
      {children}
    </a>
  );
};

export default ButtonOutline;
