import { createAsyncThunk } from '@reduxjs/toolkit';
import ecommerceApi from '../../../api/ecommerceApi';

// Thunk para cargar productos desde la API
export const loadProducts = createAsyncThunk(
  'admin/loadProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await ecommerceApi.get('/products'); // Solicita todos los productos
      return response.data; // Retorna los datos de productos si la solicitud fue exitosa
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Error loading products');
    }
  }
);

// Otros thunks que ya hemos creado
export const createProduct = createAsyncThunk(
  'admin/createProduct',
  async (newProduct, { rejectWithValue }) => {
    try {
      const response = await ecommerceApi.post('/products', newProduct);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Error creating product');
    }
  }
);

export const editProduct = createAsyncThunk(
  'admin/editProduct',
  async ({ productId, updatedProduct }, { rejectWithValue }) => {
    try {
      const response = await ecommerceApi.put(`/products/${productId}`, updatedProduct);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Error editing product');
    }
  }
);

export const deleteProduct = createAsyncThunk(
  'admin/deleteProduct',
  async (productId, { rejectWithValue }) => {
    try {
      await ecommerceApi.delete(`/products/${productId}`);
      return productId; // Retornamos el id del producto eliminado
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Error deleting product');
    }
  }
);
