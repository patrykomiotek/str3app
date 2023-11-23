import { Helmet } from "react-helmet-async";
import { Route } from "../routes";
import { ViewPort } from "../components/ViewPort";

export const ViewPortPage = () => {
  return (
    <div>
      <Helmet>
        <title>{Route.VIEWPORT.title}</title>
      </Helmet>
      <h1>{Route.VIEWPORT.title}</h1>
      <ViewPort />
    </div>
  );
};
