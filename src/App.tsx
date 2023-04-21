import React from 'react';
import { GlobalStyle } from './styles/global';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Calculator } from './pages/Freight/Calculator';


function App() {
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path='/teste' element={<Calculator />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
