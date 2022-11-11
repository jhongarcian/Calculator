export default class Calculator {
    constructor(
        primaryOperandDisplay,
        secondaryOperandDisplay,
        dataOperation,
        dataResult
    ){
        this.primaryOperandDisplay = primaryOperandDisplay,
        this.secondaryOperandDisplay = secondaryOperandDisplay,
        this.dataOperation = dataOperation,
        this.dataResult = dataResult,
        this.clear()
    }
    get primaryOperand(){
        return parseFloat(this.primaryOperandDisplay.dataset.value)
    }
    set primaryOperand(value){
        this.primaryOperandDisplay.textContent = value ?? ""
        this.primaryOperandDisplay.dataset.value = value ?? ""
    }
    get operandDisplay(){
        return this.operandDisplay.textContent
    }
    set operandDisplay(operand){
        this.dataOperation.textContent = operand
    }
    get secondaryOperand(){
        return parseFloat(this.dataOperation.textContent)
    }
    set secondaryOperand(value){
        this.secondaryOperand.dataOperation.value = value ?? ""
        this.primaryOperandDisplay.textContent = value ?? ""
    }
    clear(){
        this.primaryOperand = null
        this.secondaryOperandDisplay.textContent = ""
        this.dataOperation.textContent = ""
    }
    deleteDigit(){
        const numberString = this.primaryOperandDisplay.dataset.value
        if(numberString.length <= 1){
            this.primaryOperand = ""
            return
        }
        this.primaryOperand = numberString.substring(0, numberString.length - 1)
    }
    addDigit(digit){
        if(this.dataResult.dataset.result){
            this.primaryOperand = ""
            this.dataResult.dataset.result = ""
        }
        this.primaryOperandDisplay.textContent += digit
        this.primaryOperandDisplay.dataset.value += digit
    }
    operation(operand){
        if(operand !== ""){
            
            this.secondaryOperandDisplay.textContent = this.primaryOperand
            this.operandDisplay = operand
            this.primaryOperand = null
        }
    }
    equals(operand){
        let result
        switch(operand){
            case "÷":
                result = this.secondaryOperandDisplay.textContent / this.primaryOperandDisplay.textContent
                break
            case "*":
                result = this.secondaryOperandDisplay.textContent * this.primaryOperandDisplay.textContent
                break
            case "+":
                result = parseFloat(this.secondaryOperandDisplay.textContent) + parseFloat(this.primaryOperandDisplay.textContent)
                break
            case "-":
                result = this.secondaryOperandDisplay.textContent - this.primaryOperandDisplay.textContent
            default:
                result = ""
        }
        this.dataResult.dataset.result = result
        this.clear()
        this.primaryOperand = this.dataResult.dataset.result
        console.log(typeof this.primaryOperand)
        
    }
}