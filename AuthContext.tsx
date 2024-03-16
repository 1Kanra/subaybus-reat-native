import React, { createContext, useState, ReactNode } from 'react';

import {User} from './types'


// Define context type
interface AuthContextType {
  loggedInUser: User | null; // New state to store the logged-in user
  setLoggedInUser: (user: User | null) => void; // Setter function for loggedInUser
}

// Create context
const AuthContext = createContext<AuthContextType>({
  loggedInUser: null,
  setLoggedInUser: () => {},
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null); // Initialize loggedInUser as null

  return (
    <AuthContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
