import { add } from "./basketSlice";
import { store } from "../../store";

describe("basketReducer", () => {
  it("should add product to list", () => {
    console.log(store.getState());
    store.dispatch(
      add({ id: "abc", fields: { name: "Prod 1", description: "lorem" } })
    );
    expect(store.getState().basket.products.length).toBe(1);
  });
});
