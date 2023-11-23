import { Helmet } from "react-helmet-async";
import { Route } from "../routes";
import { Generator } from "../components/Generator";
import { AuthInfo } from "../components/AuthContext/Authinfo";
import { AuthContext } from "../components/AuthContext/AuthContext";

export const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>{Route.HOME.title}</title>
      </Helmet>
      <h1>Home</h1>
      <Generator />

      <AuthContext.Provider value={{ isLoggedIn: true }}>
        <AuthInfo />
      </AuthContext.Provider>
    </div>
  );
};
