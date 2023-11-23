import { Helmet } from "react-helmet-async";
import { Route } from "../routes";
import { Stepper } from "../components/Stepper/Stepper";

export const StepperPage = () => {
  return (
    <div>
      <Helmet>
        <title>{Route.STEPPER.title}</title>
      </Helmet>
      <h1>{Route.STEPPER.title}</h1>
      <Stepper />
    </div>
  );
};
