import { useDispatch, useSelector } from 'react-redux';
import { loadProducts, createProduct, editProduct, deleteProduct, submitProduct } from '../store/slices/admin/thunks';



export const useAdminStore = () => {
  const dispatch = useDispatch();

  // Acceder al estado desde el slice de admin
  const { products, isLoading, status, msg } = useSelector((state) => state.admin);


  const addProduct = (formData) => {
    dispatch(submitProduct(formData));  // Usamos el thunk para enviar el producto
    console.log(products)
  };

  // Acción para cargar todos los productos
  const startLoadingProducts = () => {
    dispatch(loadProducts());
  };

  // Acción para crear un producto
  const startCreatingProduct = (newProduct) => {
    dispatch(createProduct(newProduct));
  };

  // Acción para editar un producto
  const startEditingProduct = (productId, updatedProduct) => {
    dispatch(editProduct({ productId, updatedProduct }));
  };

  // Acción para eliminar un producto
  const startDeletingProduct = (productId) => {
    dispatch(deleteProduct(productId));
  };

  return {
    // Propiedades del estado
    products,
    isLoading,
    status,
    msg,

    // Métodos para dispatch
    addProduct,
    startLoadingProducts,
    startCreatingProduct,
    startEditingProduct,
    startDeletingProduct,
  };
};



