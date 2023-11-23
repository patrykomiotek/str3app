import { Helmet } from "react-helmet-async";
import { Route } from "../routes";
import { AuthInfo } from "../components/AuthContext/AuthInfo";
import { AuthProvider } from "../components/AuthContext/AuthContext";

export const AuthPage = () => {
  return (
    <div>
      <Helmet>
        <title>{Route.AUTH.title}</title>
      </Helmet>
      <h1>{Route.AUTH.title}</h1>

      <AuthProvider>
        <AuthInfo />
      </AuthProvider>

      {/* <AuthInfo /> */}
    </div>
  );
};
