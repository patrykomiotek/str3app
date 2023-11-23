import { Helmet } from "react-helmet-async";
import { Route } from "../routes";

export const AboutPage = () => {
  return (
    <div>
      <Helmet>
        <title>{Route.ABOUT.title}</title>
      </Helmet>
      <h1>{Route.ABOUT.title}</h1>
    </div>
  );
};
