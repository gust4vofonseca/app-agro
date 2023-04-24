import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';


interface PrivateAdminRouteProps {
  component: React.ComponentType<any>;
  path: string;
  exact?: boolean;
}

const PrivateAdminRoute: React.FC<PrivateAdminRouteProps> = ({ component: Component, ...rest }) => {
  const { user } = useAuth();

  console.log({userAdmin: user})

  return (
    <Route
      {...rest}
      render={(props) =>
        user?.isAdmin ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: user ? '/dashboard' : '/',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateAdminRoute;