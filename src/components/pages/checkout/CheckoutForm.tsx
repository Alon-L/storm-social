import React, { ChangeEvent, FormEvent, useState } from 'react';

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
      <button className="form--submit mb-8 font-semibold" type="submit">
        Checkout
      </button>
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
    </form>
  );
};

export default CheckoutForm;
