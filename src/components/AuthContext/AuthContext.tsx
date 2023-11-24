import { createContext, useContext, useState } from "react";

type AuthContextType = {
  isLoggedIn: boolean; // useState -> value
  logIn: () => void;
  logOut: () => void;
  toggle: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context) {
    return context;
  }
  throw new Error("Component should be placed inside AuthProvider");
};

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logIn = () => setIsLoggedIn(true);
  const logOut = () => setIsLoggedIn(false);
  const toggle = () => setIsLoggedIn((value) => !value);

  return { isLoggedIn, logIn, logOut, toggle };
};

type Props = { children: React.ReactNode };

export const AuthProvider = ({ children }: Props) => {
  return (
    <AuthContext.Provider value={useAuth()}>{children}</AuthContext.Provider>
  );
};

// <AuthContext.Provider values={{ isLoggedIn: true }}><AuthInfo /></AuthContext.Provider>
// AuthInfo -> AuthCredentials -> const context = useContext(AuthContext)
