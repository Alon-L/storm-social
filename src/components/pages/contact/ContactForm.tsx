import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import React, { ChangeEvent, useState } from 'react';
import ContactFormSocial, { ContactFormSocialProps } from './ContactFormSocial';

const contactFormSocials: ContactFormSocialProps[] = [
  {
    icon: faFacebook,
    url: 'https://www.facebook.com/Storm-Social',
  },
  {
    icon: faTwitter,
    url: 'https://twitter.com/stormsocials',
  },
  {
    icon: faInstagram,
    url: 'https://www.instagram.com/stormsocial',
  },
];

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <form className="w-full">
      <input
        required
        type="text"
        value={name}
        name="name"
        placeholder="Name"
        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
      />
      <input
        required
        value={email}
        type="email"
        name="email"
        placeholder="Email"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />
      <input
        required
        type="text"
        value={message}
        name="message"
        placeholder="Hello, I would like to..."
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setMessage(e.target.value)
        }
      />
      <div className="flex justify-between mt-8">
        <button className="form--submit" type="submit">
          Submit Message
        </button>
        <div className="flex flex-wrap justify-end">
          {contactFormSocials.map(contactFormSocial => (
            <ContactFormSocial
              key={contactFormSocial.url}
              {...contactFormSocial}
            />
          ))}
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
