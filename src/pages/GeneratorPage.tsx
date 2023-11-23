import { Helmet } from "react-helmet-async";
import { Route } from "../routes";
import { Generator } from "../components/Generator";

export const GeneratorPage = () => {
  return (
    <div>
      <Helmet>
        <title>{Route.GENERATOR.title}</title>
      </Helmet>
      <h1>{Route.GENERATOR.title}</h1>
      <Generator />
    </div>
  );
};
