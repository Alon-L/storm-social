import React from 'react';
import Routes from './Routes';
import Footer from './components/navs/footer/Footer';
import Navbar from './components/navs/navbar/Navbar';

const App: React.FC = () => {
  return (
    <div className="text-primary">
      <Navbar />
      <Routes />
      <Footer />
    </div>
  );
};

export default App;
