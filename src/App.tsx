import React from 'react';
import Routes from './Routes';
import Navbar from './components/navs/navbar/Navbar';

const App = (): JSX.Element => {
  return (
    <div>
      <Navbar />
      <Routes />
    </div>
  );
};

export default App;
