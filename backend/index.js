import express, { json } from "express";
import dotenv from "dotenv"
dotenv.config()
import products from "./data/product.js";


const PORT=process.env.PORT;
console.log(PORT);

const app = express();

app.get("/",(req,res)=>{
    res.json({message:"Get at /"})
});
app.get("/api/products",(req,res)=>{
    res.json(products)
});

app.get("/api/products/:id",(req,res)=>{
    const product = products.find(p=>p._id===req.params.id);
    res.json(product)
})
app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`);
    
})