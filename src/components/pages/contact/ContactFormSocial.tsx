import { IconDefinition } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export interface ContactFormSocialProps {
  icon: IconDefinition;
  name: string;
  url: string;
}

const ContactFormSocial: React.FC<ContactFormSocialProps> = (
  props: ContactFormSocialProps,
) => {
  const { icon, name, url } = props;

  return (
    <a className="font-semibold text-2xl mb-8" href={url}>
      <FontAwesomeIcon className="mr-2" icon={icon} /> {name}
    </a>
  );
};

export default ContactFormSocial;
