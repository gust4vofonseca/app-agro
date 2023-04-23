import { Route, redirect, RouteProps } from 'react-router-dom';

interface RotaPrivadaProps extends RouteProps {
  component: React.ComponentType<any>;
  isAdmin?: boolean;
}

function verificaAutenticacao(): boolean {
  const token = localStorage.getItem('token');
  const isAdmin = localStorage.getItem('isAdmin');
  return token && (isAdmin === 'true' || isAdmin === undefined) ? true : false;
}

function RotaPrivada({ component: Component, isAdmin, ...rest }: RotaPrivadaProps) {
  return (
    <Route
      {...rest}
      loader={(props) =>
        verificaAutenticacao() && (isAdmin) ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  );
}

export default RotaPrivada;
