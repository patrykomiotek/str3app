import { Helmet } from "react-helmet-async";
import { Route } from "../routes";
import { OrderSummary } from "@features/Products/OrderSummary";

export const OrderSummaryPage = () => {
  return (
    <div>
      <Helmet>
        <title>{Route.ORDER_SUMMARY.title}</title>
      </Helmet>
      <h1>{Route.ORDER_SUMMARY.title}</h1>
      <OrderSummary />
    </div>
  );
};
