import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 ecommerce: 10,
 isLoading: false,
 page: 0,
 items: []
}

export const ecommerceSlice = createSlice({
  name: 'ecommerce',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.ecommerce += 1;
    },
    incrementBy: (state, action) => {
      state.ecommerce += action.payload;
    },
    startLoadingItems: (state) => {
      state.isLoading = true;
    },
    setItems: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.page = action.payload.page;
      state.items = action.payload.items;
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, incrementBy, startLoadingItems, setItems } = ecommerceSlice.actions

