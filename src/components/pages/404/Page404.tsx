import React from 'react';
import { useHistory } from 'react-router-dom';

const Page404: React.FC = () => {
  const history = useHistory();

  return (
    <div className="container text-center">
      <h1 className="text-8xl font-bold">404</h1>
      <p className="text-4xl font-medium">Page Not Found!</p>
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

export default Page404;
