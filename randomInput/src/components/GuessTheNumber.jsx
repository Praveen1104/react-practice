import React, { useState } from "react";
import "./styles.css";

function GuessTheNumber() {
  const [currentNumber, setCurrentNumber] = useState();
  const [history, setHistory] = useState([]);
  const [result, setResult] = useState("");
  // Function to handle guess checking

  const handleGuess = () => {
    let random = Math.floor(Math.random() * 100) + 1;
    console.log(random);
    setHistory((prev) => [...prev, currentNumber]);
    if (random == currentNumber) {
      setResult(
        `Congratulations! You guessed the number in ${
          history.length + 1
        } attempts`
      );
    } else if (
      currentNumber <= 100 &&
      currentNumber >= 1 &&
      currentNumber < random
    ) {
      setResult("Too low! Try again");
    } else if (
      random < currentNumber &&
      currentNumber <= 100 &&
      currentNumber >= 1
    ) {
      setResult("Too high! Try again");
    } else {
      setResult("Please enter a number between 1 and 100");
    }

    // if(currentNumber ===)
  };
  console.log(currentNumber);
  // Function to reset the game
  const resetGame = () => {
    setHistory([]);
    setCurrentNumber("");
    setResult("");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "50px 0",
      }}
    >
      <h2>Guess the Number</h2>
      <input
        value={currentNumber}
        onChange={(e) => setCurrentNumber(Number(e.target.value))}
        type="number"
        max="100"
        min="1"
        placeholder="Enter a number between 1 and 100"
        style={{ width: "300px", padding: "5px" }}
        id="guess-input"
      />
      <div className="two-buttons">
        <button onClick={handleGuess}>Check Guess</button>
        <button onClick={resetGame}>Reset Game</button>
      </div>
      <p>{result}</p>
    </div>
  );
}

export default GuessTheNumber;
