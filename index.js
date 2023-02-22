const display = document.querySelector(".display");
const btns = document.querySelector(".buttons");

class Calculator {
  constructor() {}

  updateDisplay(char) {
    display.textContent += char;
  }

  clearDisplay() {
    display.textContent = "";
  }

  calcAndDisplay() {
    try {
      const result = eval(display.textContent);
      display.textContent = result;
    } catch (err) {
      display.textContent = "Error 🪳🐔";
    }
  }
}

const calculator1 = new Calculator();

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
