import Card from "../components/Card";
import Loader from "../components/Loader";
import { useGetProductsQuery } from "../slices/productsApiSlice";
const Home = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <div>{error?.data?.message || error.error}</div>
      ) : (
        <>
          <h2 className="text-2xl font-semibold text-center mt-4">
            Latest Products
          </h2>
          <div className="flex justify-center items-center p-4">
            <div className="grid grid-cols-3">
              {products.map((product) => (
                <Card key={product._id} product={product} />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
