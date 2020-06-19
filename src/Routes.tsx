import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/pages/home/Home';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
