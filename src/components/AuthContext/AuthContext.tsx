import { Dispatch, SetStateAction, createContext } from "react";

type AuthContextType = {
  isLoggedIn: boolean; // useState -> value
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>; // useState -> setter
};

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  setIsLoggedIn: () => null,
});

// <AuthContext.Provider values={{ isLoggedIn: true }}><AuthInfo /></AuthContext.Provider>
// AuthInfo -> AuthCredentials -> const context = useContext(AuthContext)
