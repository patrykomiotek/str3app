import { Helmet } from "react-helmet-async";
import { Route } from "../routes";
import { Generator } from "../components/Generator";
import { AuthInfo } from "../components/AuthContext/AuthInfo";
import {
  AuthContext,
  AuthProvider,
} from "../components/AuthContext/AuthContext";

export const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>{Route.HOME.title}</title>
      </Helmet>
      <h1>Home</h1>
      <Generator />

      <AuthProvider>
        <AuthInfo />
      </AuthProvider>
    </div>
  );
};
