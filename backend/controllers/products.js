import Products from "../models/products.js";

class productControllers {
    async createProduct (req, res) {
        try {
            const { nombre, precio, stock } = req.body;

            const product = await Products.create({nombre, precio, stock})

            res.status(200).send({
                message: "producto creado",
                product
            })
        } catch (error) {
            res.status(500).send({
                message: "error creando producto",
                error: error.message
            })
        }
    }

    async obtenerProducts (req, res) {
        try {
            const products = await Products.find();
            res.status(200).send({
                message: "productos obtenidos",
                products
            })
        } catch (error) {
            res.status(500).send({
                message: "error obteniendo productos",
                error: error.message
            })
        }
    }

    async obtenerProducto (req, res) {
        try {
            const { id } = req.params;
            const product = await Products.findByIdJ({id});
            res.status(200).send({
                message: "producto obtenido",
                product
            })
        } catch (error) {
            res.status(500).send({
                message: "error obteniendo",
                error: error.message
            })
        }

    }

    async editarProducto (req, res) {
        try {
            const { id } = req. params;
            const { nombre, precio, stock } = req.body;
            const product = await Products.findByIdAndUpdate( id, {nombre, precio, stock }, {new: true});
            res.status(200).send({
                message: "producto actualizado",
                product
            })
        } catch (error) {
            res.status(500).send({
                message: "error actualizando",
                error: error.message
            })
        }
    }

    async eliminarProduct (req, res) {
        try {
            const { id } = req.params;
            const product = await Products.findByIdAndDelete({id});
            res.status(200).send({
                message: "producto eliminado"
            })
        } catch (error) {
            res.status(500).send({
                message: "error eliminando",
                error: error.message
            })
        }
    }
}

export default productControllers;