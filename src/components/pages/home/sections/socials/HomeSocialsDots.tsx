import React, { ComponentProps } from 'react';
import dots from '../../../../../assets/home/dots.png';

const HomeSocialsDots: React.FC<ComponentProps<'img'>> = (
  props: ComponentProps<'img'>,
) => {
  const { className } = props;

  return (
    <img
      {...props}
      className={`absolute transform z-0 ${className || ''}`}
      src={dots}
      alt="Dots"
    />
  );
};

export default HomeSocialsDots;
