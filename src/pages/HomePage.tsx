import { Helmet } from "react-helmet-async";
import { Route } from "../routes";
import { CounterRedux } from "../features/CounterRedux";
import { DataTable } from "@components/DataTable";

export const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>{Route.HOME.title}</title>
      </Helmet>
      <h1>{Route.HOME.title}</h1>
      {/* <CounterRedux /> */}
      <DataTable />
    </div>
  );
};
