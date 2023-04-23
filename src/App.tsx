import React from 'react';
import { GlobalStyle } from './styles/global';
import { AuthenticationProvider } from './hooks/useAuth';
import Routes from './routes';


function App() {
  return (
    <>
      <GlobalStyle/>
      <AuthenticationProvider>
          <Routes/>
      </AuthenticationProvider>
    </>
  );
}

export default App;
