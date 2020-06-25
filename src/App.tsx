import React from 'react';
import Routes from './Routes';

const App: React.FC = () => {
  return (
    <div className="text-primary min-h-screen flex flex-col justify-between">
      <Routes />
    </div>
  );
};

export default App;
