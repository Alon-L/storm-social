import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import ContactForm from './ContactForm';
import ContactFormSocial, { ContactFormSocialProps } from './ContactFormSocial';
import ContactNavbar from '../../navs/navbar/contact/ContactNavbar';

const contactFormSocials: ContactFormSocialProps[] = [
  {
    icon: faFacebook,
    name: 'Facebook',
    url: 'https://facebook.com',
  },
  {
    icon: faTwitter,
    name: 'Twitter',
    url: 'https://twitter.com',
  },
  {
    icon: faInstagram,
    name: 'Instagram',
    url: 'https://instagram.com',
  },
];

const Contact: React.FC = () => {
  return (
    <>
      <ContactNavbar />
      <div className="flex lg:flex-nowrap flex-wrap h-screen">
        <div className="contact--column lg:w-1/2 w-full">
          <div>
            <h1 className="text-5xl font-bold mb-16">Contact Us</h1>
            <ContactForm />
          </div>
        </div>
        <div className="contact--column contact--background relative lg:w-1/2 w-full">
          <div className="mt-32 flex flex-col justify-around h-1/3 lg:px-16 text-white">
            {contactFormSocials.map(contactFormSocial => (
              <ContactFormSocial
                key={contactFormSocial.name}
                {...contactFormSocial}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
