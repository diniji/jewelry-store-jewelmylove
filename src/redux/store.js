import { configureStore } from '@reduxjs/toolkit';
import jewels from './jewelsSlice';
import cart from './cartSlice';

export const store = configureStore({
    reducer: {
      jewels: jewels,
      cart: cart
    },
  })