const previousOperationText = document.querySelector("#previous-opration");
const currentOperationText  = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

class Calculator {
  constructor(previousOperationText, currentOperationText) {
    this.previousOperationText = previousOperationText;
    this.currentOperationText = currentOperationText;
    this.currentOperation = "";
  }

  // add digit to calculator screen
  addDigit(digit) {

    if(digit === "." && this.currentOperationText.innerText.includes(".")) {
      return;
    }
    
    this.currentOperation = digit;
    this.updateScreen();
  }

  // alterar valores da tela da calculadora
updateScreen() {
    this.currentOperationText.innerText += this.currentOperation;
  }
};

const calc = new Calculator(previousOperationText, currentOperationText);

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
      const value = e.target.innerText;

      if (+value >= 0 || value === ".") {
        calc.addDigit(value);
      } else {
        console.log("Op:" + value);
      }
      
  });

});