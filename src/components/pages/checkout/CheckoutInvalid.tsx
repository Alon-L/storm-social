import React from 'react';
import { useHistory } from 'react-router-dom';

const CheckoutInvalid: React.FC = () => {
  const history = useHistory();

  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold">The selected item was not found!</h1>
      <button
        className="btn mt-8 px-16"
        type="button"
        onClick={() => history.goBack()}
      >
        Go Back!
      </button>
    </div>
  );
};

export default CheckoutInvalid;
