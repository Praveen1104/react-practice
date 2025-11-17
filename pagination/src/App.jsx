import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Pagination from "./components/Pagination";

function App() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();

    if (data && data.products) {
      setProducts(data.products);
      console.log(data);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <div>
        <Pagination items={products} pageSize={10} />
      </div>
    </>
  );
}

export default App;
