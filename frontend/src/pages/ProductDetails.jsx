import { useParams } from "react-router-dom";
import products from "../product";
import Rating from "../components/Rating";
const ProductDetails = () => {
  const { id: productId } = useParams();
  const product = products.find((p) => p._id === productId);
  console.log(product);

  return (
    <div className="flex justify-center gap-4 m-8">
      <img src="/img.jpg" className="w-md" alt={product.name} />

      <div className="space-y-4 max-w-md">
        <h3 className="text-3xl">{product.name}</h3>
        <Rating value={product.rating} text={product.numReviews} />
        <p className="text-xl">Price : $ {product.price}</p>
        <p>{product.description}</p>
      </div>
      <div className="border border-gray-400 p-4 flex flex-col h-[200px]">
        <p>Price : {product.price}</p>
        <hr />
        <p>{product.countInStock > 0 ? "In Stock" : "Out Of Stock"}</p>
        <hr />
        <button className="mt-auto bg-[#1C1917] text-white py-2 px-4 rounded-xl">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
