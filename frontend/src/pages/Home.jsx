import Card from "../components/Card"
import { useEffect,useState } from "react";
import axios from "axios"



const Home = () => {
  const [products, setProducts] = useState([]);

useEffect(()=>{
  const fetchProducts = async()=>{
    const {data} = await axios.get("/api/products");
    setProducts(data)
  }

  fetchProducts()
},[])
  return (
    <>
    <h2 className="text-2xl font-semibold text-center mt-4">Latest Products</h2>
      <div className="flex justify-center items-center p-4">
      <div className="grid grid-cols-3">
        {products.map((product) => (
          <Card key={product._id} product={product} />
        ))}
      </div>
    </div>
    </>
  );
};

export default Home;
