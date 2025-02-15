import { Link } from "react-router-dom";
import Rating from "./Rating";

const Card = ({ product }) => {
  return (
    <Link to={`/product/${product._id}`} className="mx-4 bg-white mb-8 rounded-4xl h-[350px] shadow-2xl">
      <img src={product.image} className="w-sm rounded-t-4xl" alt={product.name} />
      <div className="p-2">
        <h3>{product.name}</h3>
        <p>$ {product.price}</p>
        <Rating value={product.rating} text={product.numReviews} />
      </div>
    </Link>
  );
};

export default Card;
