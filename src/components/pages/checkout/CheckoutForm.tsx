import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';

export interface CheckoutFormProps {
  onSubmit: (fields: CheckoutFormFields) => void;
}

export interface CheckoutFormFields {
  name: string;
  instagram: string;
  email: string;
  [key: string]: string;
}

const CheckoutForm: React.FC<CheckoutFormProps> = (
  props: CheckoutFormProps,
) => {
  const { onSubmit } = props;

  const [name, setName] = useState('');
  const [instagram, setInstagram] = useState('');
  const [email, setEmail] = useState('');

  return (
    <form
      onSubmit={(e: FormEvent) => {
        e.preventDefault();
        onSubmit({ name, instagram, email });
      }}
    >
      <input
        required
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
      />
      <input
        required
        type="text"
        placeholder="Instagram Username"
        name="instagram"
        value={instagram}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setInstagram(e.target.value)
        }
      />
      <input
        required
        placeholder="Email"
        type="email"
        name="email"
        value={email}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />
      <label className="inline-flex items-center">
        <input
          className="form-checkbox h-5 w-5 text-brand-700 mb-0"
          required
          type="checkbox"
          name="acceptedTos"
        />
        <span className="ml-3">
          You must accept the{' '}
          <Link to="/tos" className="underline">
            Terms of Service
          </Link>{' '}
          to continue
        </span>
      </label>
      <button className="block form--submit mt-8 font-semibold" type="submit">
        Checkout
      </button>
    </form>
  );
};

export default CheckoutForm;
