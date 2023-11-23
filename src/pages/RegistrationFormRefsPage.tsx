import { Helmet } from "react-helmet-async";
import { Route } from "../routes";
import { RegistrationFormState } from "../components/RegistrationFormState";

export const RegistrationFormStatePage = () => {
  return (
    <div>
      <Helmet>
        <title>{Route.REGISTRATION_FORM_STATE.title}</title>
      </Helmet>
      <h1>{Route.REGISTRATION_FORM_STATE.title}</h1>
      <RegistrationFormState />
    </div>
  );
};
