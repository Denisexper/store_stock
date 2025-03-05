import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function listarPro () {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/get-products");
                const data = await response.json();
                console.log(data)
                if(data.prodcuts){
                    setProducts(data.products);
                }else {
                    console.error("nose encontraron productos")
                }
            } catch (error) {
                console.error(error)
            };
        }
        fetchProducts();
    }, []);

    const handleCrear = () => {
        navigate("/crear")
    }

    
}