import { ReactNode, createContext, useCallback, useContext, useState } from "react";
import api from "../services/api";

interface AuthenticationProviderProps {
    children: ReactNode;
}

interface User {
    id: string;
    name: string;
    email: string;
    isAdmin: string;
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

    const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
        const response = await api.post('/user/sessions', {
            email,
            password,
        });

        const { token, user } = response.data;

        if (user.first_access) {
            localStorage.setItem('@Terrafort:token', token);

            localStorage.setItem('@Terrafort:user', JSON.stringify(user));

            setData({ token, user });
        }

        api.defaults.headers.authorization = `Bearer ${token}`;
    }, []);

      const signOut = useCallback(() => {
        localStorage.removeItem('@Terrafort:token');
        localStorage.removeItem('@Terrafort:user');
    
        setData({} as IAuthState);
      }, []);

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