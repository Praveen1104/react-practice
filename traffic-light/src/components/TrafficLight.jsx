import React, { useState, useEffect } from "react";

const TrafficLight = () => {
  // ------------------------------
  // 1️⃣ Define traffic light colors
  // ------------------------------
  const lights = ["red", "green", "yellow"];

  // ---------------------------------------------
  // 2️⃣ Define the duration of each light in ms
  // ---------------------------------------------
  const lightDurations = [3000, 3000, 2000];

  // ---------------------------------------------
  // 3️⃣ Define state to track active light
  // ---------------------------------------------
  const [activeLight, setActiveLight] = useState(0); // 0 = Red light initially

  // -------------------------------------------------
  // 4️⃣ useEffect hook to handle automatic light change
  // -------------------------------------------------
  useEffect(() => {
    // Set a timer to switch to the next light
    const timer = setTimeout(() => {
      // -------------------------------------------------
      // 🔹 This line updates which light is ON
      // -------------------------------------------------
      // Using a function updater ensures we always have the latest state value (prev)
      // prev = current activeLight index
      // (prev + 1) → moves to the next light index
      // % lights.length → cycles back to 0 when the last light is reached
      //
      // Example:
      // If prev = 0 → (0+1)%3 = 1 → Green
      // If prev = 1 → (1+1)%3 = 2 → Yellow
      // If prev = 2 → (2+1)%3 = 0 → Red (loop back to start)
      setActiveLight((prev) => (prev + 1) % lights.length);
    }, lightDurations[activeLight]); // wait according to current light's time

    // -----------------------------
    // 5️⃣ Cleanup function
    // -----------------------------
    return () => clearTimeout(timer);

    // -----------------------------
    // 6️⃣ Dependencies array
    // -----------------------------
    // Effect re-runs every time activeLight changes
  }, [activeLight, lights.length, lightDurations]);

  // -------------------------------------------------
  // 7️⃣ Render the traffic light UI
  // -------------------------------------------------
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>🚦 Traffic Light Simulation</h2>

      {/* Outer traffic light container */}
      <div
        style={{
          width: "100px",
          margin: "auto",
          padding: "20px",
          background: "#333",
          borderRadius: "10px",
        }}
      >
        {/* Render all lights */}
        {lights.map((color, index) => (
          <div
            key={color}
            style={{
              width: "60px",
              height: "60px",
              margin: "10px auto",
              borderRadius: "50%",
              // Highlight the active light
              backgroundColor: activeLight === index ? color : "gray",
              transition: "background-color 0.5s ease", // smooth color change
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TrafficLight;
