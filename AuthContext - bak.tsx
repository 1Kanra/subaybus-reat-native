import React, { createContext, useState, ReactNode } from 'react';

// Define types for user data
interface User {
  username: string;
  password: string;
  email: string;
  phoneNumber: string;
}

// Define context type
interface AuthContextType {
  users: User[];
  registerUser: (user: User) => void;
  loginUser: (phoneNumber: string, password: string) => User | undefined;
}

// Create context
const AuthContext = createContext<AuthContextType>({
  users: [],
  registerUser: () => {},
  loginUser: () => undefined,
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);

  const registerUser = (user: User) => {
    setUsers(prevUsers => [...prevUsers, user]);
  };

  const loginUser = (phoneNumber: string, password: string) => {
    return users.find(user => user.phoneNumber === phoneNumber && user.password === password);
  };

  return (
    <AuthContext.Provider value={{ users, registerUser, loginUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
