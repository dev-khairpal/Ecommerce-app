import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const Rating = ({ value, text }) => {

  return (
    <div className="flex items-center gap-1 text-yellow-400">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i}>
          {value >= i ? (
            <FaStar />
          ) : value >= i - 0.5 ? (
            <FaStarHalfAlt />
          ) : (
            <FaRegStar />
          )}
        </span>
      ))}
      {text && <span className="text-black text-sm">{text} Reviews</span>}
    </div>
  );
};

export default Rating;
