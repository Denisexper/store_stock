import { Router } from "express";
import productControllers from "../controllers/products.js";

const ProductsControllers = new productControllers();

const app = Router();

app.post("/crear-producto", ProductsControllers.createProduct);
app.get("/obtener-productos", ProductsControllers.obtenerProducts);
app.get("/obtener-product/:id", ProductsControllers.obtenerProducto);
app.put("/editar-producto/:id", ProductsControllers.editarProducto);
app.delete("/eliminar-producto/:id", ProductsControllers.eliminarProduct);

export default app;