import React from 'react';
import { BrowserRouter, Routes as RoutesSwitch , Route} from 'react-router-dom';

// import Route from './Route';
import { Calculator } from '../pages/Freight/Calculator';
import { Header } from '../components/Header';
import { useAuth } from '../hooks/useAuth';

const Routes: React.FC = () => {

  const { user } = useAuth();

  return (
    <BrowserRouter>
      <RoutesSwitch>
        <Route path='/' element={<Header/>} />
        <Route path='/teste' element={user ? <Calculator/> : <Header/>} />
      </RoutesSwitch>
    </BrowserRouter>
  );
};

export default Routes;
