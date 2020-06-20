import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './components/pages/about/About';
import Home from './components/pages/home/Home';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </Switch>
  );
};

export default Routes;
