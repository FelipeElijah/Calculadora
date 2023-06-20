class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

    clear(){
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete(){

    }

    appenNumber(number){
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation){

    }

    compute(){

    }

    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand
    }
}
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-clear]')
const previousOperandTextElement= document.querySelector('[data-previous-result]')
const currentOperandTextElement= document.querySelector('[data-current-result]')

const calculator = new Calculator (previousOperandTextElement,currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
    calculator.appenNumber(button.innerText)
    calculator.updateDisplay()
    })
})