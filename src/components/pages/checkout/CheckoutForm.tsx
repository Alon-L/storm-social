import React, { ChangeEvent, useState } from 'react';

const CheckoutForm: React.FC = () => {
  const [name, setName] = useState('');
  const [instagram, setInstagram] = useState('');
  const [email, setEmail] = useState('');

  return (
    <form>
      <input
        required
        type="text"
        placeholder="Apple Seed"
        name="name"
        value={name}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
      />
      <input
        required
        type="text"
        placeholder="@apple_seed"
        name="instagram"
        value={instagram}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setInstagram(e.target.value)
        }
      />
      <input
        required
        type="text"
        placeholder="seed@apple.com"
        name="email"
        value={email}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />
      <button className="form--submit" type="submit">
        Checkout
      </button>
    </form>
  );
};

export default CheckoutForm;
