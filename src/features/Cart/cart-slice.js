import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItemsLength: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state) => {
      state.cartItemsLength++
    },
  }
})

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;