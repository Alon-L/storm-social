import React, { ComponentProps, PropsWithChildren } from 'react';

const Button: React.FC<ComponentProps<'button'>> = (
  props: PropsWithChildren<ComponentProps<'button'>>,
) => {
  return (
    <button
      {...props}
      className={`font-medium border-3 border-primary-500 hover:border-primary-700 bg-primary-500 hover:bg-primary-700 text-white uppercase py-2 px-6 rounded-lg ${
        props.className || ''
      }`}
      type="button"
    >
      {props.children}
    </button>
  );
};

export default Button;
