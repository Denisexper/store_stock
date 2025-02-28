import { useState } from "react";
import { Toaster, toast } from "sonner";
import '../componnents/crearProduct.css';

function CreateProduct() {
  const [formData, setFormData] = useState({
    nombre: "",
    precio: "",
    stock: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/crear-product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success("Producto creado");
      } else {
        toast.error("Error creando producto");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Crear nuevo producto</h1>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Nombre del producto"
          className="input"
        />

        <input
          type="number"
          name="precio"
          value={formData.precio}
          onChange={handleChange}
          placeholder="Precio"
          className="input"
        />

        <input
          type="number"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          placeholder="Stock"
          className="input"
        />

        <button type="submit" className="btn-submit">
          Crear producto
        </button>
      </form>

      <div className="product-list">
        {/* Aquí agregarás los productos dinámicamente */}
      </div>

      <Toaster position="bottom-center" />
    </div>
  );
}

export default CreateProduct;
