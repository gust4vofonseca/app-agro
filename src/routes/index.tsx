import React from 'react';
import { BrowserRouter, Route, Switch as RoutesSwitch } from 'react-router-dom';

import  SalesPage  from '../pages/SellerPage/SalesPAge';
import { Login } from '../pages/Login';
import PrivateAdminRoute from './PrivateAdminRoute'
import PrivateRoute from './PrivateRoute';


const Routes: React.FC = () => {

  return (
    <BrowserRouter>
      <RoutesSwitch>
        <Route path="/" exact component={Login} />
        <PrivateRoute path="/dashboard" exact component={SalesPage} />
      </RoutesSwitch>
    </BrowserRouter>
  );
};

export default Routes;
