import { useState } from "react";
import { Toaster, toast } from "sonner";
import { useNavigate } from "react-router-dom";

function createProduct() {
    const [productoData, setProductoData] = useState({
        nombre: "",
        precio: "",
        descripcion: "",
        stock: "",
        categoria: "",
    })
    const navigate = useNavigate();

   const handleChange = (e) => {
    const {name, value} = e.target;
    setProductoData({
        ...productoData,
        [name]: value,
    })
   }

   const handleSubmit = async (e) => {
    e.preventDefautl();
    try {
        const response = await fetch("http://localhost:3000/api/creatae", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(productoData)
        })
        const data = await response.json();
        if(response.ok){
            toast.success("producto creado")
        } else {
            toast.success("error creando producot")
        }
    } catch (error) {
        console.log(error)
    }
   }

   const handleList = () => {
    navigate("/")
   }

   return (
    <div>
        <form onDoubleClick={handleSubmit}>
            <input 
            type="text"
            name="nombre"
            value={productoData.nombre}
            onChange={handleChange}
            placeholder="nombre producto"
            className="input" 
            />

            <input 
            type="text"
            name="precio"
            value={productoData.precio}
            onChange={handleChange}
            placeholder="precio producto"
            className="input" 
            />
        </form>
    </div>
   )
}