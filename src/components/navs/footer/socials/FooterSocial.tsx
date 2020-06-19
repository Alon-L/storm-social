import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export interface FooterSocialProps {
  url: string;
  icon: IconDefinition;
}

const FooterSocial: React.FC<FooterSocialProps> = (
  props: FooterSocialProps,
) => {
  const { url, icon } = props;

  return (
    <a className="mr-4" href={url} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon
        className="transition-all duration-200 ease-in-out opacity-75 hover:opacity-100 hover:text-brand-500"
        size="2x"
        icon={icon}
      />
    </a>
  );
};

export default FooterSocial;
