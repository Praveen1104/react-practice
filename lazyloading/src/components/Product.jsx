import React, { useEffect, useState } from "react";
import "./Product.css";
function Product() {
  const [products, setProducts] = useState([]);
  const getProduct = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products").then(
        (data) => data.json()
      );
      setProducts(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div>
      <h1>Component Based Lazy Produuct List</h1>
      {products?.slice(0, 11).map((product, i) => {
        return (
          <div key={i} className="card">
            <p>{product.title}</p>
            <img src={product.thumbnail} />
          </div>
        );
      })}
    </div>
  );
}

export default Product;
