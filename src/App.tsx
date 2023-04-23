import React from 'react';
import { GlobalStyle } from './styles/global';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Calculator } from './pages/Freight/Calculator';
import { AuthenticationProvider } from './hooks/useAuth';


function App() {
  return (
    <>
      <GlobalStyle/>
      <AuthenticationProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/teste' element={<Calculator />} />
          </Routes>
        </BrowserRouter>
      </AuthenticationProvider>
    </>
  );
}

export default App;
