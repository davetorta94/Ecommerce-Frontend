import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 isLoading: false,
 //page: 0,
 items: [{
    _id: undefined,
    name: '',
    img: '',
    price: undefined
 }]
}

export const ecommerceSlice = createSlice({
  name: 'ecommerce',
  initialState: {
    state: 'loading'
  },
  reducers: {
    onAdd: (state, action) => {
      state.items.push(action.payload);
    },
    
    setItems: (state, action) => {
      console.log(action);
      state = 'loaded';
      state.items = action.payload;
      //state.page = action.payload.page;
    }
  },
})

// Action creators are generated for each case reducer function
export const { onAdd , setItems } = ecommerceSlice.actions

