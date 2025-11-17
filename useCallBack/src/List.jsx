import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const List = ({ getItem }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("List");
    setItems(getItem(10));
    console.log(getItem);
  }, [getItem]);
  return (
    <div>
      {items?.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </div>
  );
};

export default List;
