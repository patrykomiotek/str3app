import { createContext } from "react";

type AuthContextType = {
  isLoggedIn: boolean;
};

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
});

// <AuthContext.Provider values={{ isLoggedIn: true }}><AuthInfo /></AuthContext.Provider>
// AuthInfo -> AuthCredentials -> const context = useContext(AuthContext)
