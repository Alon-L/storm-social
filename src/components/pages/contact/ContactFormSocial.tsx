import { IconDefinition } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export interface ContactFormSocialProps {
  icon: IconDefinition;
  url: string;
}

const ContactFormSocial: React.FC<ContactFormSocialProps> = (
  props: ContactFormSocialProps,
) => {
  const { icon, url } = props;

  return (
    <a className="font-semibold text-2xl sm:mr-3" href={url}>
      <FontAwesomeIcon
        className="mr-2 transition-colors duration-200 ease-in-out hover:text-brand-500"
        icon={icon}
      />
    </a>
  );
};

export default ContactFormSocial;
