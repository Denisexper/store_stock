import { use, useState } from 'react'
import { Toaster, toast } from 'sonner'
import { useNavigate } from 'react-router-dom'

function CrearPro () {
    const [proData, setProData] = useState({
        nombre: "",
        precio: "",
        descripcion: ""
    })

    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setProData({
            ...proData,
            [name]: value,
        })
    }

    
}