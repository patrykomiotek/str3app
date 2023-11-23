import { Helmet } from "react-helmet-async";
import { Route } from "../routes";
import { Counter } from "../components/Counter";

export const CounterPage = () => {
  return (
    <div>
      <Helmet>
        <title>{Route.COUNTER.title}</title>
      </Helmet>
      <h1>{Route.COUNTER.title}</h1>
      <Counter />
    </div>
  );
};
