import React, { ButtonHTMLAttributes } from 'react';

import { Button, Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const ButtonLogin: React.FC<ButtonProps> = ({ children, loading, ...rest }) => {
  return (
    <Container>
      <Button type="submit" {...rest}>
        {loading ? (
          <div className="loader">
          </div>
        ) : (
          children
        )}
      </Button>
    </Container>
  );
};

export default ButtonLogin;
