import mongoose from "mongoose";

let URL = "mongodb://localhost:27017/Store_stock"

const connect = async () => {
    try {
        const conn = await mongoose.connect(URL);
        console.log("connected db");
    } catch (error) {
        console.error(error)
    }
} 

export default connect