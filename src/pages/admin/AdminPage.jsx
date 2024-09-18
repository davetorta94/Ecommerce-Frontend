import React, { useState } from 'react';
import { useAdminStore } from '../../hooks/useAdminStore'; // Asegúrate de tener este hook


const initialProductState = {
  nombre: '',
  descripcion: '',
  precio: 0,
  cantidad: 0,
  foto: ''
};

export const AdminPage = () => {
  const { addProduct, isLoading, msg } = useAdminStore(); // Acceder a las funciones del store
  const [newProduct, setNewProduct] = useState(initialProductState);

  // Manejar los cambios en los inputs del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value
    });
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Despachar la acción para agregar un nuevo producto
    addProduct(newProduct);

    // Limpiar el formulario después de enviar
    setNewProduct(initialProductState);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Obtener el archivo seleccionado
    setNewProduct({
      ...newProduct,
      foto: file // Guardar el archivo en el estado
    });
  };

  return (
    <div className="container">
      <div className="row">
        <h2>Agregar Producto</h2>
      </div>
      {isLoading && <p>Subiendo producto...</p>}
      {msg && <p>{msg}</p>}

      <form className="product-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre del Producto</label>
          <input
            type="text"
            name="nombre"
            value={newProduct.nombre}
            onChange={handleInputChange}
            placeholder="Nombre del producto"
            required
          />
        </div>

        <div className="form-group">
          <label>Descripción</label>
          <textarea
            name="descripcion"
            value={newProduct.descripcion}
            onChange={handleInputChange}
            placeholder="Descripción del producto"
            required
          />
        </div>

        <div className="form-group">
          <label>Precio</label>
          <input
            type="number"
            name="precio"
            value={newProduct.precio}
            onChange={handleInputChange}
            placeholder="Precio"
            required
            min="0"
          />
        </div>

        <div className="form-group">
          <label>Cantidad</label>
          <input
            type="number"
            name="cantidad"
            value={newProduct.cantidad}
            onChange={handleInputChange}
            placeholder="Cantidad disponible"
            required
            min="0"
          />
        </div>

          <div className="form-group">
            <label>Subir Foto</label>
            <input
              type="file"
              name="foto"
              onChange={handleFileChange}
              accept="image/*" // Aceptar solo archivos de imagen
              required
            />
          </div>

        <button type="submit" className="btn-submit" disabled={isLoading}>
          {isLoading ? 'Guardando...' : 'Agregar Producto'}
        </button>
      </form>
    </div>
  );
};

export default AdminPage;

