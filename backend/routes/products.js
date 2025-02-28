import { Router } from "express";
import productControllers from "../controllers/products.js";

const ProductsControllers = new productControllers();

const app = Router();

app.post("/crear-producto", ProductsControllers.createProduct);
app.get("/obtener-productos", ProductsControllers.obtenerProducts);
app.get("/obtener-product", ProductsControllers.obtenerProducto);
app.put("/editar-producto", ProductsControllers.editarProducto);
app.delete("/eliminar-producto", ProductsControllers.eliminarProduct);

export default app;