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
    verifyTokenExpiration(): Promise<void>;
  }

export const AuthenticationContext = createContext<AuthContextData>(
    {} as AuthContextData,
);

export function AuthenticationProvider({children}: AuthenticationProviderProps) {
    const [data, setData] = useState<IAuthState>({} as IAuthState);

    const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
        const response = await api.post('/user/sessions', {
            email,
            password,
        });

        const { token, user, refresh_token } = response.data;

        localStorage.setItem('@Terrafort:refresh_token', refresh_token);

        setData({ token, user });
    }, []);

    const signOut = useCallback(() => {
      localStorage.removeItem('@Terrafort:refresh_token');
  
      setData({} as IAuthState);
    }, []);

    const verifyTokenExpiration = useCallback(async () => {
      console.log("Aqui")
      const refresh_token = localStorage.getItem('@Terrafort:refresh_token');
  
      try {
        const response = await api.post('/user/refresh-token', {
          token: refresh_token,
        });

        console.log({response})

        const { token, user, refresh_token: newRefreshToken } = response.data;

        localStorage.setItem('@Terrafort:refresh_token', newRefreshToken);

        setData({ token, user });
      } catch (err) {
        console.log({err})
        signOut();
      }
    }, [signOut]);

      return (
        <AuthenticationContext.Provider
          value={{ user: data.user, signIn, signOut, verifyTokenExpiration }}
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