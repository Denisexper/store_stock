import { use, useState } from 'react'
import { Toaster, toast } from 'sonner'
import { useNavigate } from 'react-router-dom'

function CrearProducto () {
    const [proData, setProData] = useState({
        nombre: "",
        precio: "",
        descripcion: ""
    })

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
            }else {
                toast.success("error creando producto")
            }
        } catch (error) {
            console.error(error)
        }

        const navigate = useNavigate();

        const handleListar = () => {
            navigate("/listar")
        }
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>

            <input 
            type="text"
            name='nombre'
            value={proData.nombre}
            onChange={handleChange}
            placeholder='nombre del porducto'
            className='input' 
            />

<input 
            type="text"
            name='precio'
            value={proData.precio}
            onChange={handleChange}
            placeholder='precio del producto'
            className='input' 
            />

<input 
            type="text"
            name='descripcion'
            value={proData.descripcion}
            onChange={handleChange}
            placeholder='descripcion del porducto'
            className='input' 
            />
        </form>
        </div>
    )
}