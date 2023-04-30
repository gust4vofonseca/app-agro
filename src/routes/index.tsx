import React from 'react';
import { BrowserRouter, Route, Switch as RoutesSwitch } from 'react-router-dom';

import  SalesPage  from '../pages/SellerPage/SalesPAge';
import { Login } from '../pages/Login';
import PrivateAdminRoute from './PrivateAdminRoute'
import PrivateRoute from './PrivateRoute';
import Dashboard from '../pages/Dashboard';
import Users from '../pages/Users';
import Products from '../pages/Products';
import Vehicles from '../pages/Vehicles';


const Routes: React.FC = () => {

  return (
    <BrowserRouter>
      <RoutesSwitch>
        <Route path="/" exact component={Login} />
        <PrivateRoute path="/dashboard" exact component={Dashboard} />
        <PrivateRoute path="/venda" exact component={SalesPage} />
        <PrivateAdminRoute path='/usuario' exact component={Users}/>
        <PrivateAdminRoute path='/produtos' exact component={Products}/>
        <PrivateAdminRoute path='/veiculos' exact component={Vehicles}/>
      </RoutesSwitch>
    </BrowserRouter>
  );
};

export default Routes;
