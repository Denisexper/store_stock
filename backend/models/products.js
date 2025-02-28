import mongoose, { Schema } from "mongoose";

const productsShema = new mongoose.Schema({
    nombre: {
        type: String
    },
    precio: {
        type: String
    },
    stock: {
        type: Boolean,
        default: true,
    }
})

const Products = mongoose.model("Products", productsShema);
export default Products;