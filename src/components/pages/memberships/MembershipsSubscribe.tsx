import React, { ChangeEvent, useState } from 'react';

const MembershipsSubscribe: React.FC = () => {
  const [email, setEmail] = useState('');

  return (
    <div>
      <h4 className="text-xl font-semibold mb-4">
        Subscribe to receive the latest updates!
      </h4>
      <form>
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
        <button type="submit" className="btn px-12">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default MembershipsSubscribe;
