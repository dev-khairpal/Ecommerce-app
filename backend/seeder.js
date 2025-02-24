import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./data/user.js";
import product from "./data/product.js"
import User from "./models/user.model.js";
import Product from "./models/product.model.js";
import Order from "./models/order.model.js";
import connectDB from "./config/db.js";


dotenv.config();
connectDB();

const importData = async()=>{
    try{
        await User.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();

        const createdUser = await User.insertMany(users);
        const adminUser =  createdUser[0]._id;

        const sampleProducts = product.map((item)=>{
            return {...item, user:adminUser}
        });

        await Product.insertMany(sampleProducts);
        console.log("Data Imported");
        process.exit();

    }catch(err){
        console.log(err);
        process.exit(1);
    }
}


const destroyData = async()=>{
    try {
        await User.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();
        console.log("Data Deleted");
        process.exit();
    } catch (error) {
        console.log(err);
        process.exit(1);
    }
}

if(process.argv[2]==='-d'){
    destroyData()
}else{
    importData()
}