import React, { useState } from "react";

function ChipsInput() {
  const [chips, setChips] = useState({
    value: "",
  });
  const [chispArray, setChispArray] = useState([]);
  const handleChange = (e) => {
    setChips({ value: e.target.value });
  };
  const handleKEyDown = (e) => {
    if (e.key === "Enter" && chips.value.trim() !== "") {
      setChispArray((prev) => [...prev, chips]);
      setChips({
        value: "",
      });
    }
  };
  const removeChip = (i) => {
    console.log(i);
    let next = chispArray.filter((curr, idx) => {
      if (idx !== i) {
        return curr;
      }
    });
    setChispArray(next);
  };
  return (
    <div className="main-container">
      <h2>Chips Input</h2>
      <input
        type="text"
        value={chips.value}
        placeholder="Type a chip and press tag"
        className="input"
        name="chips"
        onChange={handleChange}
        onKeyDown={(e) => handleKEyDown(e)}
      />

      <div className="chip-wrapper">
        {chispArray?.map((curr, i, arr) => {
          return (
            <div className="chip">
              <span key={i} className="chip-text">
                {curr.value}{" "}
              </span>
              <span className="chip-remove" onClick={() => removeChip(i)}>
                X
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ChipsInput;
