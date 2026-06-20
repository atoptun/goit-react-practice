import { useState } from 'react';
import { userContext, type User } from '../userContext';

function UserProvider({ children }: { children: React.ReactNode }) {
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const logIn = () => {
    setIsLogedIn(true);
    setUser({ name: 'John', age: 20 });
  };

  const logOut = () => {
    setIsLogedIn(false);
    setUser(null);
  };

  return (
    <userContext.Provider value={{ user, isLogedIn, logIn, logOut }}>
      {children}
    </userContext.Provider>
  );
}
export default UserProvider;
