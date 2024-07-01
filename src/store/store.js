import { configureStore } from '@reduxjs/toolkit'
import {ecommerceSlice} from './slices/ecommerce/'

/* SI NO FUNCIONA PON ecommerceSlice.reducer */

export const store = configureStore({
  reducer: {
    ecommerce: ecommerceSlice.reducer,
  },
})