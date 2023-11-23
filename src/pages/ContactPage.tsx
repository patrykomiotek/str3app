import { Helmet } from "react-helmet-async";
import { Route } from "../routes";

export const ContactPage = () => {
  return (
    <div>
      <Helmet>
        <title>{Route.CONTACT.title}</title>
      </Helmet>
      <h1>Contact</h1>
    </div>
  );
};
