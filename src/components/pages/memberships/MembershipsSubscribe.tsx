import React, { ChangeEvent, useState } from 'react';
import Button from '../../utils/buttons/Button';

const MembershipsSubscribe: React.FC = () => {
  const [email, setEmail] = useState('');

  return (
    <div>
      <h4 className="text-xl font-semibold mb-4">
        Subscribe to receive the latest updates!
      </h4>
      <input
        className="w-full mb-12"
        placeholder="seed@apple.com"
        type="text"
        name="email"
        value={email}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />
      <Button href="#" className="px-12">
        Subscribe
      </Button>
    </div>
  );
};

export default MembershipsSubscribe;
