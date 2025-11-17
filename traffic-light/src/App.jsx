import React from "react";
import TrafficLight from "./components/TrafficLight";
import PracticeLight from "./components/PracticeLight";
import "./App.css"; // Assuming you have some styles in App.css
const App = () => {
  return (
    <div>
      <TrafficLight />
      <PracticeLight />
    </div>
  );
};

export default App;
