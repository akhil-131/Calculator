// Get all buttons and the display input
const buttons = document.querySelectorAll("button");
const display = document.getElementById("display");

// Variable to store the current input
let currentInput = "";

// Loop through each button
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    // Clear button
    if (value === "C") {
      currentInput = "";
      display.value = "";
    }
    // Equal button
    else if (value === "=") {
      try {
        // Evaluate the expression
        const result = eval(currentInput);
        display.value = result;
        currentInput = result.toString(); // Allow further operations
      } catch {
        display.value = "Error";
        currentInput = "";
      }
    }
    // Number or operator
    else {
      currentInput += value;
      display.value = currentInput;
    }
  });
});
