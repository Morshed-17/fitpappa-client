import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type TCarSlice = {
  value: number;
};

const initialState: TCarSlice = {
  value: 0,
};

export const cartSlice = createSlice({
  name: "counter",

  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },

    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = cartSlice.actions;

export default cartSlice.reducer;
