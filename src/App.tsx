import React from 'react';
import Routes from './Routes';
import Navbar from './components/navs/navbar/Navbar';

const App = (): JSX.Element => {
  return (
    <div className="container mx-auto text-primary">
      <Navbar />
      <Routes />
    </div>
  );
};

export default App;
