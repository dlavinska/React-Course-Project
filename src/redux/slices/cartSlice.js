import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const item = state.items.find((item) => item.id === payload.id);

      if (item) {
        item.qty += 1;
      } else {
        state.items.push({
          ...payload,
          qty: 1,
        });
      }
    },
    deleteFromCart: (state, { payload }) => {
      state.items = state.items.filter((item) => item.id !== payload);
    },
    decrementQty: (state, { payload }) => {
      const item = state.items.find((item) => item.id === payload);

      if (item.qty <= 1) {
        state.items = state.items.filter((item) => item.id !== payload);
      }

      item.qty -= 1;
    },
    incrementQty: (state, { payload }) => {
      const item = state.items.find((item) => item.id === payload);
      item.qty += 1;
    },
    clearCart: (state) => {
      state.items = [];
    }
  },
});

export const { addToCart, deleteFromCart, decrementQty, incrementQty, clearCart } = cartSlice.actions;
export default cartSlice.reducer;