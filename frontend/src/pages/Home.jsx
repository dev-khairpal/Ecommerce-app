import Card from "../components/Card"
import product from "../product"

const Home = () => {
  return (
    <>
    <h2 className="text-2xl font-semibold text-center mt-4">Latest Products</h2>
      <div className="flex justify-center items-center p-4">
      <div className="grid grid-cols-3">
        {product.map((product) => (
          <Card key={product._id} product={product} />
        ))}
      </div>
    </div>
    </>
  );
};

export default Home;
