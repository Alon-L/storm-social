import React from 'react';
import MembershipsSubscribe from './MembershipsSubscribe';

const Memberships: React.FC = () => {
  return (
    <div className="container text-center">
      <div className="lg:w-3/5 mx-auto">
        <div className="mb-20">
          <h1 className="text-3xl font-semibold mb-3">Memberships</h1>
          <p>
            We are currently curating the best social media membership package!
            <br />
            When its ready you will be the first to know.
          </p>
        </div>
        <MembershipsSubscribe />
      </div>
    </div>
  );
};

export default Memberships;
