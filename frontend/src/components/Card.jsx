import { Link } from "react-router-dom";
import Rating from "./Rating";

const Card = ({ product }) => {
  return (
    <Link to={`/product/${product._id}`} className="mx-4 bg-white mb-8 rounded-4xl h-[305px] shadow-2xl p-2">
      <img src={product.image} className="object-contain w-[250px] h-[200px] object-center rounded-t-4xl mx-auto mt-4" alt={product.name} />
      <div className="p-2">
        <h3 className="line-clamp-1">{product.name}</h3>
        <p>$ {product.price}</p>
        <Rating value={product.rating} text={product.numReviews} />
      </div>
    </Link>
  );
};

export default Card;
