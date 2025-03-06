import { useState } from 'react'
import { Toaster, toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
import { FaBorderStyle } from 'react-icons/fa';
import { handle } from 'express/lib/application';

function crarPro () {
    const [ proData, setProData ] = useState({
        nombre: "",
        precio: "",
        descripcion: "",
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setProData({
            ...proData,
            [name]: value,
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:3000/api/create-pro", {
                method:"POST",
                "Content-Type": "application/json"
            });
            body: JSON.stringify(proData)
            const data = await response.json();
            if(response.ok){
                toast.success("producto creado")
            }else {
                toast.success("error creando producto")
            }
        } catch (error) {
            console.error(error)
        }
    };

    const handleListar = () => {
        navigate("/")
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <input 
            type="text"
            name='nombre'
            value={proData.nombre}
            onChange={handleChange}
            placeholder='nombre producto'
            className='input'
            />

            <input 
            type="text"
            name='precio producto'
            value={proData.precio}
            onChange={handleChange}
            placeholder='precio producto'
            className='input' 
            />

            <input 
            type="text"
            name='descripcion'
            value={proData.descripcion}
            onChange={proData.descripcion}
            placeholder='descrion del producto'
            className='input' 
            />
            </form>
        </div>
    )
}