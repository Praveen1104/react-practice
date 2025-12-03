import React, { useEffect, useState } from "react";
import "./App.css";
const App = () => {
  const [categories, setCaatregories] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(1)
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    let canceled = false
    const fetchProducts = async () => {
      const response = fetch(" https://api.escuelajs.co/api/v1/categories");
      response
        .then((data) => data.json())
        .then((data) => {
          if (!canceled) {
            setCaatregories(data);
          }


        });
    };
    fetchProducts();
    return () => {
      canceled = true
    }
  }, []);

  useEffect(() => {
    if (!selectProduct) return

    let canceled = false
    const showProducts = async () => {
      setLoading(true)
      const response =await fetch(`https://api.escuelajs.co/api/v1/categories/${selectedProduct}/products`)
        .then((data) => data.json()).
        then((data) => {

          if (!canceled) {
            console.log(data)
            setCategoryProducts(data || [])
            setLoading(false)
          }

        })
    }

    showProducts()

    return()=>{
      canceled=true
    }
  },[selectedProduct])

  const selectProduct = async (id) => {
    setSelectedProduct(id)
  }


  return (
    <div>
      <div className="outer-div">
        {categories.map((data, i) => {
          return (
            <div key={i} className="single-card">
              <p>{data.name}</p>
              <button onClick={() => selectProduct(data.id)}>Show</button>
            </div>
          );
        })}
      </div>
      <div>
        <h1>Category Image</h1>
        {
          loading ? "Loading" : <div className="display-products">
            {
              categoryProducts?.map((curr, i) => {
                return (
                  <div key={i} className="product">
                    <p>{curr.title}</p>
                   
                  </div>
                )
              })
            }
          </div>
        }
      </div>
    </div>
  );
};

export default App;
//https://fakeapi.platzi.com/en/rest/categories/
//https://medium.com/hackernoon/avoiding-race-conditions-when-fetching-data-with-react-hooks-220d6fd0f663
