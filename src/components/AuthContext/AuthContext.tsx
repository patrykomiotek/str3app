import { Dispatch, SetStateAction, createContext, useState } from "react";

type AuthContextType = {
  isLoggedIn: boolean; // useState -> value
  logIn: () => void;
  logOut: () => void;
  toggle: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  logIn: () => null,
  logOut: () => null,
  toggle: () => null,
});

const useAuthContext = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logIn = () => setIsLoggedIn(true);
  const logOut = () => setIsLoggedIn(false);
  const toggle = () => setIsLoggedIn((value) => !value);

  return { isLoggedIn, logIn, logOut, toggle };
};

type Props = { children: React.ReactNode };

export const AuthProvider = ({ children }: Props) => {
  return (
    <AuthContext.Provider value={useAuthContext()}>
      {children}
    </AuthContext.Provider>
  );
};

// <AuthContext.Provider values={{ isLoggedIn: true }}><AuthInfo /></AuthContext.Provider>
// AuthInfo -> AuthCredentials -> const context = useContext(AuthContext)
