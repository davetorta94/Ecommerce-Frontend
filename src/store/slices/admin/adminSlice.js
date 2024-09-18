import { createSlice } from '@reduxjs/toolkit';
import { loadProducts, createProduct, editProduct, deleteProduct } from './thunks';

export const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    status: 'idle',
    isLoading: false,
    products: [],
    msg: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Cargar productos
      .addCase(loadProducts.pending, (state) => {
        state.isLoading = true;
        state.status = 'loading-products';
      })
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.status = 'products-loaded';
        state.products = action.payload;
      })
      .addCase(loadProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.status = 'error-loading-products';
        state.msg = action.payload || 'Error loading products';
      })
      // Crear producto
      .addCase(createProduct.pending, (state) => {
        state.isLoading = true;
        state.status = 'creating-product';
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.status = 'product-created';
        state.products.push(action.payload); // Añadimos el nuevo producto a la lista
        state.msg = 'Product created successfully';
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.status = 'error-creating-product';
        state.msg = action.payload || 'Error creating product';
      })
      // Thunk para editar producto
      .addCase(editProduct.pending, (state) => {
        state.isLoading = true;
        state.status = 'editing-product';
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.status = 'product-edited';
        const index = state.products.findIndex(p => p.id === action.payload.id);
        if (index !== -1) {
          state.products[index] = action.payload;
        }
        state.msg = 'Product edited successfully';
      })
      .addCase(editProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.status = 'error-editing-product';
        state.msg = action.payload || 'Error editing product';
      })
      // Thunk para borrar producto
      .addCase(deleteProduct.pending, (state) => {
        state.isLoading = true;
        state.status = 'deleting-product';
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.status = 'product-deleted';
        state.products = state.products.filter(p => p.id !== action.payload);
        state.msg = 'Product deleted successfully';
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.status = 'error-deleting-product';
        state.msg = action.payload || 'Error deleting product';
      });
  },
});

export default adminSlice.reducer;
