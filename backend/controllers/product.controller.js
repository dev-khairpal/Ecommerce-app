import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/product.model.js";

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();

  res.json(products);
});
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  }else{
      res.status(404);
      throw new Error("Product Not Found")
  }
});


export {getProducts, getProductById}