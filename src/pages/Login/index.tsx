
import { Form } from '@unform/web';
import { Toaster } from 'react-hot-toast';
import { FormHandles } from '@unform/core';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import Input from '../../components/Input';
import Button from '../../components/ButtonLogin';

import { ReactComponent as PasswordIcon } from '../../assets/icons/password.svg';
import { ReactComponent as PasswordErrorIcon } from '../../assets/icons/password_vermelho.svg';
import { ReactComponent as UserIcon } from '../../assets/icons/user.svg';
import { ReactComponent as UserErrorIcon } from '../../assets/icons/user_vermelho.svg';
import { ReactComponent as AdvanceIcon } from '../../assets/icons/advance.svg';

import {
  Container,
  Content,
  LoginContainer,
  Label,
  ForgotPasswordAndErrorContainer,
  ForgotPasswordContainer,
  Text,
} from './styles';
import { useAuth } from '../../hooks/useAuth';
import getValidationErrors from '../../utils/getValidateErrors';

interface ISignInFormData {
  email: string;
  password: string;
}

interface IUser {
  id: string;
  name: string;
  email: string;
  token: string;
  isAdmin: string;
}

export const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [error, setError] = useState('');
  const refresh_token = localStorage.getItem('@Terrafort:refresh_token');

  const { signIn, verifyTokenExpiration } = useAuth();

  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: ISignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),

          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });

        history.push('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }
        setError('Falha no login, verifique seu e-mail e/ou senha.');
      }
    },
    [history, signIn],
  );


  useEffect(() => {
    void async function fetchData() {
      if (refresh_token) {
        await verifyTokenExpiration();

        history.push('/dashboard');
    }
    }();
}, [history, refresh_token, verifyTokenExpiration]);

  return (
    <Container>
      <Content>
        <Toaster position="top-right" reverseOrder={false} />

        <LoginContainer>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <Label htmlFor="email">E-mail:</Label>
            <Input
              id="email"
              name="email"
              icon={UserIcon}
              iconError={UserErrorIcon}
            />

            <Label htmlFor="password">Senha:</Label>
            <Input
              id="password"
              name="password"
              type="password"
              icon={PasswordIcon}
              iconError={PasswordErrorIcon}
            />

            <Button type="submit">
              ENTRAR
              <AdvanceIcon />
            </Button>
          </Form>
        </LoginContainer>
      </Content>
    </Container>
  );
};
