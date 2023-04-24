import React from 'react';
import { BrowserRouter, Route, Switch as RoutesSwitch } from 'react-router-dom';

import  Calculator  from '../pages/Freight/Calculator';
import { Login } from '../pages/Login';
import PrivateAdminRoute from './PrivateAdminRoute'
import PrivateRoute from './PrivateRoute';


const Routes: React.FC = () => {

  return (
    <BrowserRouter>
      <RoutesSwitch>
        <Route path="/" exact component={Login} />
        <PrivateRoute path="/dashboard" exact component={Calculator} />
        <PrivateAdminRoute path="/calculator" exact component={Calculator} />
      </RoutesSwitch>
    </BrowserRouter>
  );
};

export default Routes;
