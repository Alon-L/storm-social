import React from 'react';
import ContactForm from './ContactForm';
import Navbar, { NavbarTheme } from '../../navs/navbar/Navbar';

const Contact: React.FC = () => {
  return (
    <div className="contact relative">
      <Navbar theme={NavbarTheme.Light} />
      <div className="contact--background full-height container flex items-center justify-center">
        <div className="shadow-lg mx-auto bg-white -mt-32 lg:w-3/5 sm:p-12 py-8 px-4 rounded-lg">
          <h1 className="text-3xl sm:text-5xl font-bold mb-16 text-center">
            Contact Us
          </h1>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
