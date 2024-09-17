import { configureStore } from '@reduxjs/toolkit'
import {ecommerceSlice} from './slices/ecommerce/'
import { authSlice } from './slices/auth'
import { adminSlice } from './slices/admin/adminSlice'



export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ecommerce: ecommerceSlice.reducer,
    admin: adminSlice.reducer,
  },
})