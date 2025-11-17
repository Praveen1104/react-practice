// Get display element
const display = document.getElementById("calculatorDisplay");

// Current expression
let expression = "";

// Get all buttons
const buttons = document.querySelectorAll(".calculator__btn");

// Function to update display
function updateDisplay() {
  display.value = expression;
}

// Loop through buttons
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.getAttribute("data-value");
    const action = btn.getAttribute("data-action");

    if (action === "clear") {
      expression = "";
      updateDisplay();
      return;
    }

    if (action === "equals") {
      try {
        expression = math.evaluate(expression);
      } catch (err) {
        expression = "Error";
      }
      updateDisplay();
      return;
    }

    if (value) {
      expression += value;
      updateDisplay();
    }
  });
});

// Keyboard support
document.addEventListener("keydown", (e) => {
  if ("0123456789+-*/.".includes(e.key)) {
    expression += e.key;
    updateDisplay();
  } else if (e.key === "Enter") {
    try {
      expression = math.evaluate(expression);
    } catch {
      expression = "Error";
    }
    updateDisplay();
  } else if (e.key === "Backspace") {
    expression = expression.slice(0, -1);
    updateDisplay();
  } else if (e.key === "Escape") {
    expression = "";
    updateDisplay();
  }
});
