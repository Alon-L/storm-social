import { faExclamationCircle } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const WipNotification: React.FC = () => {
  return (
    <div className="w-full p-2 bg-primary-700">
      <p className="text-center m-0 text-white">
        <FontAwesomeIcon className="mr-2" icon={faExclamationCircle} /> This
        page is a W.I.P
      </p>
    </div>
  );
};

export default WipNotification;
