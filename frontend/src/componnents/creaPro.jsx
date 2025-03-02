import { useState } from "react";
import { Toaster, toast } from "sonner";

function crearPro () {

    const [proData, setProData ] = useState({
        nombre: "",
        precio: "",
        descripcion: "",
        stock: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProData({
            ...proData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        console.log(FormData);
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8080/api/testes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(proData),
            });
            const data = await response.json();
            console.log(data)
            if(response.ok){
                toast.success("producto creado")
            } else {
                toast.success("error creando")
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <h1>Crear producto</h1>

            <form onSubmit={handleSubmit}>

                <input
                type="text"
                name= "nombre"
                value={proData.nombre}
                onChange={handleChange}
                placeholder="nombre producto"
                className="input" 
                />

                <input 
                type="text"
                name="precio"
                value={proData.precio}
                onChange={handleChange}
                placeholder="precio"
                className="input"
                />

                <input type="text"
                name="descripcion"
                value={proData.descripcion}
                onChange={handleChange}
                placeholder="descripcion"
                className="input"
                />

                <input type="text"
                name="stock"
                value={proData.stock}
                onChange={handleChange}
                placeholder="stock"
                className="input" />
            </form>
        </div>
    )

}