import { ProductDto } from "@features/types/products";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type State = {
  products: ProductDto[];
};

const initialState: State = {
  products: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ProductDto>) => {
      state.products.push(action.payload);
      // return {
      //   ...state,
      //   products: state.products
      // }
    },
    remove: (state, action: PayloadAction<ProductDto["id"]>) => {
      state.products.filter((elem) => elem.id !== action.payload);
    },
  },
});

export const { add, remove } = basketSlice.actions;

export default basketSlice.reducer;
