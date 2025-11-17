import React, { useEffect, useState } from "react";

const PracticeLight = () => {
  const lights = ["red", "green", "yellow"];

  const lightDurations = [3000, 3000, 2000];
  const [activeLight, setActiveLight] = useState(0);

  useEffect(() => {
    // console.log(activeLight);
    console.log(lights[activeLight]);
    const timer = setTimeout(() => {
      setActiveLight((prev) => (prev + 1) % lights.length);
    }, lightDurations[activeLight]);

    return () => clearTimeout(timer);
  }, [activeLight]);
  return (
    <div>
      <div className="light-frame">
        <div
          className={`single-light red ${
            lights[activeLight] === "red" ? "active" : ""
          }`}
        ></div>
        <div
          className={`single-light green ${
            lights[activeLight] === "green" ? "active" : ""
          }`}
        ></div>
        <div
          className={`single-light yellow ${
            lights[activeLight] === "yellow" ? "active" : ""
          }`}
        ></div>
      </div>
    </div>
  );
};

export default PracticeLight;
