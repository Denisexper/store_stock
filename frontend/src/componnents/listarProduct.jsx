import React, { useEffect, useState } from "react";
import "../componnents/listarProduct.css"
import { FaTrash, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


function ListarProducts() {
  const [productos, setProductos] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/obtener-productos");
        const data = await response.json();
        console.log(data)
        if (data && data.products && data.products.length > 0) { 
            //para poner en el setProductos ponemos lo que nos tra el array en este caso es products
            setProductos(data.products); 
            
          } else {
            console.error("No se encontraron productos en la respuesta.");
          }
        
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };

    fetchProductos();
  }, []);

  const handleChange = () => {

    navigate("/")
  }

  return (
    <div className="container">
      <h1 className="title">Lista de productos</h1>
      <div className="product-list">
        {productos.length > 0 ? (
          productos.map((product) => (
            <div key={product._id} className="product-card">
              <h2 className="product-name">{product.nombre}</h2>
              <p className="product-price">Precio: ${product.precio}</p>
              <p className="product-stock">Stock: {product.stock}</p>
              <p className="product-available">
                Disponible: {product.stock ? "Sí" : "No"}
              </p>
              <div className="product-actions">
                <button className="edit-button">
                  <FaEdit />
                </button>
                <button className="delete-button">
                  <FaTrash />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No hay productos disponibles.</p>
        )}
      </div>
      <button id="crearbtn" onClick={handleChange}>Crear Producto</button>
    </div>
  );
}

export default ListarProducts;
