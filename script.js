import Calculator from "./Calculator.js";

const primaryOperandDisplay = document.querySelector("[data-primary-operand]")
const secondaryOperandDsplay = document.querySelector("[data-secondary-operand]")
const dataOperation = document.querySelector("[data-operation]")
const dataResult = document.querySelector("[data-result]")

const calculator = new Calculator(
    primaryOperandDisplay,
    secondaryOperandDsplay,
    dataOperation,
    dataResult
)

document.addEventListener("click", event => {
    if(event.target.matches("[data-number]")){
        calculator.addDigit(event.target.textContent)
    }
    //Add button 
    if(event.target.matches("[data-all-clear]")){
        calculator.clear()
    }
    //Ac works
    if(event.target.matches("[data-delete]")){
        calculator.deleteDigit()
    }
    // del works
    if(event.target.matches("[data-operation]")){
        calculator.operation(event.target.textContent)
    }
    // operands works
    if(event.target.matches("[data-equals]")){
        calculator.equals(dataOperation.textContent)
    }
    // equals
})
