const display = document.querySelector(".display");
const btns = document.querySelector(".buttons");

class Calculator {
  constructor(displayResult) {
    this.displayResult = displayResult;
  }

  updateDisplay(char) {
    this.displayResult.textContent += char;
  }

  clearDisplay() {
    this.displayResult.textContent = "";
  }

  calcAndDisplay() {
    try {
      const result = eval(this.displayResult.textContent);
      this.displayResult.textContent = result;
    } catch (err) {
      this.displayResult.textContent = "Error 🪳🐔";
    }
  }
}

const calculator1 = new Calculator(display);

btns.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const btn = e.target;

    const action = btn.dataset.action;

    if (action !== "clear" && action !== "calculate") {
      calculator1.updateDisplay(btn.value);
    }

    if (action === "calculate") {
      calculator1.calcAndDisplay();
    }

    if (action === "clear") {
      calculator1.clearDisplay();
    }
  }
});
