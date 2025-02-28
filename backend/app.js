import express from "express"
import cors from "cors"
import connect from "./config/connection.js";
import productRoutes from "./routes/products.js"

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`server up in port ${PORT}`)
})

connect();

app.use("/api", productRoutes)

