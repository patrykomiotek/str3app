import { Helmet } from "react-helmet-async";
import { Route } from "../routes";
import { Generator } from "../components/Generator";
import { AuthInfo } from "../components/AuthContext/AuthInfo";
import {
  AuthContext,
  AuthProvider,
} from "../components/AuthContext/AuthContext";
import { Stepper } from "../components/Stepper/Stepper";

export const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>{Route.HOME.title}</title>
      </Helmet>
      <h1>{Route.HOME.title}</h1>
    </div>
  );
};
