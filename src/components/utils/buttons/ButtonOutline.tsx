import React, { ComponentProps, PropsWithChildren } from 'react';

const ButtonOutline: React.FC<ComponentProps<'button'>> = (
  props: PropsWithChildren<ComponentProps<'button'>>,
) => {
  const { className, children } = props;

  return (
    <button
      {...props}
      className={`font-medium border-3 border-primary-500 hover:border-primary-700 text-brand-500 hover:text-brand-700 uppercase py-2 px-6 rounded-lg bg-white ${
        className || ''
      }`}
      type="button"
    >
      {children}
    </button>
  );
};

export default ButtonOutline;
