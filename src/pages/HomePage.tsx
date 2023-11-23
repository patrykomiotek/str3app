import { Helmet } from "react-helmet-async";
import { Route } from "../routes";

export const HomePage = () => {
  // throw new Error("Oh no!");
  return (
    <div>
      <Helmet>
        <title>{Route.HOME.title}</title>
      </Helmet>
      <h1>Home</h1>
    </div>
  );
};
