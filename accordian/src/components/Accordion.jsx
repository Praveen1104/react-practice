import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function Accordion({ items }) {
  const [open, setOpen] = useState();
  console.log(items);
  const onHandle = (i) => {
    setOpen((prev) => (prev === i ? null : i));
  };
  return (
    <div className="accordion">
      {items.map((item, i) => {
        return (
          <div key={i} className="accordion-item">
            <button className="accordion-title" onClick={() => onHandle(i)}>
              {item?.title}{" "}
              <span>{open === i ? <FaChevronUp /> : <FaChevronDown />}</span>
            </button>
            {open === i ? (
              <p className="accordion-content">{item?.content}</p>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
