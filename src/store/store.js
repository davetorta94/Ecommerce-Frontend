import { configureStore } from '@reduxjs/toolkit'
import {ecommerceSlice} from './slices/ecommerce/'
import { authSlice } from './slices/auth'

/* SI NO FUNCIONA PON ecommerceSlice.reducer */

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ecommerce: ecommerceSlice.reducer,
  },
})