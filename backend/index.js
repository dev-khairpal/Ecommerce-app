import express, { json } from "express";
import dotenv from "dotenv"
dotenv.config()
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

import productRoutes from "./routes/product.routes.js";
connectDB()
const PORT=process.env.PORT;
console.log(PORT);

const app = express();

app.get("/",(req,res)=>{
    res.json({message:"Get at /"})
});

app.use("/api/products", productRoutes);
app.use(notFound);
app.use(errorHandler)
app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`);
    
})

//9mMYCmzZzSsXQSND