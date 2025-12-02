import React, { useEffect, useState } from "react";
import "./App.css";
const App = () => {
  const [categories, setCaatregories] = useState([]);
  const fetchProducts = async () => {
    const response = fetch(" https://api.escuelajs.co/api/v1/categories");
    response
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setCaatregories(data);
      });
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      <div className="outer-div">
        {categories.map((data, i) => {
          return (
            <div key={i} className="single-card">
              <p>{data.name}</p>
              <button>Show</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
//https://fakeapi.platzi.com/en/rest/categories/
//https://medium.com/hackernoon/avoiding-race-conditions-when-fetching-data-with-react-hooks-220d6fd0f663
