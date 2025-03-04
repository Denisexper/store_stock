import { useState } from "react";
import { Toaster, toast } from "sonner";
import { useNavigate } from "react-router-dom";

function crearProduct() {
    const [proData, setProData] = useState({
        nombre: "",
        precio: "",
        descripcion: "",
    })
    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setProData({
            ...proData,
            [name]: value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:3000/api/create",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(proData)
            })
            const data = await response.json();
            if(response.ok){
                toast.success("producto creado")
            } else {
                toast.success("error creando producto")
            }
        } catch (error) {
            console.error(error)
        }
    }

    const handleListar = () => {
        navigate("/")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input 
            type="text"
            name="nombre"
            value={proData.nombre}
            onChange={handleChange}
            placeholder="ingresa nombre"
            className="input" 
            />

            <input 
            type="text"
            name="precio"
            value={proData.precio}
            onChange={handleChange}
            placeholder="precio producto"
            className="input" 
            />

            </form>
        </div>
    )
}