import { Helmet } from "react-helmet-async";
import { Route } from "../routes";
import { RegistrationFormRefs } from "../components/RegistrationFormRefs";

export const RegistrationFormRefsPage = () => {
  return (
    <div>
      <Helmet>
        <title>{Route.REGISTRATION_FORM_REFS.title}</title>
      </Helmet>
      <h1>{Route.REGISTRATION_FORM_REFS.title}</h1>
      <RegistrationFormRefs />
    </div>
  );
};
