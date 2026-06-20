import { createContext, useContext } from 'react';

export interface User {
  name: string;
  age: number;
}

export const userContext = createContext<{
  user: User | null;
  isLogedIn: boolean;
  logIn: () => void;
  logOut: () => void;
} | null>(null);

export const useUser = () => useContext(userContext);
