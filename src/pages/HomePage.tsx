import { Helmet } from "react-helmet-async";
import { Route } from "../routes";
import { Generator } from "../components/Generator";
import { AuthInfo } from "../components/AuthContext/AuthInfo";
import { AuthContext } from "../components/AuthContext/AuthContext";
import { useState } from "react";

export const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Helmet>
        <title>{Route.HOME.title}</title>
      </Helmet>
      <h1>Home</h1>
      <Generator />

      <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <AuthInfo />
      </AuthContext.Provider>
    </div>
  );
};
