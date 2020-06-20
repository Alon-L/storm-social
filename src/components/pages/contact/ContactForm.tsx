import React, { ChangeEvent, useState } from 'react';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <form className="w-full">
      <input
        className="contact--form--input"
        type="text"
        value={name}
        name="name"
        placeholder="Apple Seed"
        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
      />
      <input
        className="contact--form--input"
        type="text"
        value={email}
        name="email"
        placeholder="seed@apple.com"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />
      <input
        className="contact--form--input"
        type="text"
        value={message}
        name="message"
        placeholder="Hello, I would like to..."
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setMessage(e.target.value)
        }
      />
      <button className="contact--form--submit" type="submit">
        Submit Message
      </button>
    </form>
  );
};

export default ContactForm;
