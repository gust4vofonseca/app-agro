import { ReactNode, createContext, useCallback, useContext, useState } from "react";
import api from "../services/api";
import { JwtPayload, decode } from "jsonwebtoken";

interface AuthenticationProviderProps {
    children: ReactNode;
}

interface User {
    id: string;
    name: string;
    email: string;
    isAdmin: boolean;
}
  
interface IAuthState {
    token: string;
    user: User;
}

interface SignInCredentials {
    email: string;
    password: string;
}

interface AuthContextData {
    user: User;
    signIn(credentials: SignInCredentials): Promise<void>;
    signOut(): void;
  }

export const AuthenticationContext = createContext<AuthContextData>(
    {} as AuthContextData,
);

export function AuthenticationProvider({children}: AuthenticationProviderProps) {
    const [data, setData] = useState<IAuthState>(() => {
        const token = localStorage.getItem('@Terrafort:token');
        const user = localStorage.getItem('@Terrafort:user');
    
        if (token &&  user) {
          api.defaults.headers.authorization = `Bearer ${token}`;
    
          return { token, user: JSON.parse(user) };
        }
    
        return {} as IAuthState;
      });

    let refresh_token_new = '';

    const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
        const response = await api.post('/user/sessions', {
            email,
            password,
        });

        const { token, user, refresh_token } = response.data;

        localStorage.setItem('@Terrafort:token', token);

        localStorage.setItem('@Terrafort:user', JSON.stringify(user));

        // eslint-disable-next-line react-hooks/exhaustive-deps
        refresh_token_new = refresh_token;

        setData({ token, user });
    }, []);

    const signOut = useCallback(() => {
      localStorage.removeItem('@Terrafort:token');
      localStorage.removeItem('@Terrafort:user');
  
      setData({} as IAuthState);
    }, []);

    // const verifyTokenExpiration = useCallback(async () => {
    //   const token = localStorage.getItem('@Precato:token');
  
    //   if (token) {
    //     const { exp } = decode(token) as JwtPayload;
  
    //     if (Date.now() >= Number(exp) * 1000) {
    //       try {
    //         const response = await api.post('/sessions/refresh-token', {
    //           token: refresh_token_new,
    //         });
  
    //         const { token: refresh_token } = response.data;
  
    //         localStorage.removeItem('@Precato:token');
    //         localStorage.setItem('@Precato:token', refresh_token);
  
    //         api.defaults.headers.authorization = `Bearer ${refresh_token}`;
  
    //         setData({ user: data.user, token: refresh_token });
    //       } catch (err) {
    //         signOut();
    //       }
    //     }
    //   }
    // }, [data.user, refresh_token_new, signOut]);

      return (
        <AuthenticationContext.Provider
          value={{ user: data.user, signIn, signOut }}
        >
          {children}
        </AuthenticationContext.Provider>
      );
}

export function useAuth(): AuthContextData {
    const context = useContext(AuthenticationContext);
  
    if (!context) {
        
    //   throw new Error('useAuth must be used within an AuthProvider');
    }
  
    return context;
  }