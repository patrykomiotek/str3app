import type { Meta } from "@storybook/react";

import { CounterRedux } from "./CounterRedux";
import { Provider } from "react-redux";
import { store } from "../../store";

const meta = {
  title: "Features/CounterRedux",
  component: CounterRedux,
  // tags: ["autodocs"],
} satisfies Meta<typeof CounterRedux>;

export default meta;

export const _CounterRedux = () => (
  <Provider store={store}>
    <CounterRedux />
  </Provider>
);
