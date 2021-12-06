/* Operation function declaration */
function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1-num2

}

function multiply(num1, num2) {
    return num1*num2
}

function divide(num1, num2) {
    return num1/num2
}

function operate(operator, num1, num2) {
    if (operator === "+") {
        return add(num1,num2)
    } 
    else if (operator === "-") {
        return subtract(num1,num2)
    }
    else if (operator === "*") {
        return multiply(num1,num2)
    }
    else if (operator === "/") {
        return divide(num1,num2)
    }
}

/* variable statement section */
const display = document.querySelector("#display")
const numberButton = document.querySelectorAll(".number")
let  displayValue
const operatorButton = document.querySelectorAll(".operator")
let numericalValue1
let numericalvalue2
let OperatorButtonPressCounter = 0
/* TextWrite Section*/
function buttonEventListenerAdd(target, listener, functionToAdd) {
    for(let i=0; i < target.length; i++) {
        target[i].addEventListener(listener, functionToAdd);
    }
}

function textWrite(input) {
    let textToWrite = input.textContent;
    display.textContent += textToWrite;

} 
function numberButtonPress() {
    textWrite(this)

}


function operatorSelection() {
    if (OperatorButtonPressCounter < 1) {
        numericalValue1 = display.textContent
    }
    OperatorButtonPressCounter += 1
    let chosenOperator = this.textContent
    if (chosenOperator === "×") {
        convertedOperator = "*"
    }
    else if (chosenOperator === "÷") {
        convertedOperator = "/"
    }
    else if (OperatorButtonPressCounter >= 1) {
        numericalvalue2 = 1
    }
    else {
        convertedOperator = chosenOperator
    }
    display.textContent += chosenOperator;
    console.log(numericalvalue2)
    console.log(OperatorButtonPressCounter)
}

function calculation(event) {
    if (event.key === "=") {
        operate()
    }
}

buttonEventListenerAdd(numberButton, "click", numberButtonPress)
buttonEventListenerAdd(operatorButton, "click", operatorSelection)
document.addEventListener("keydown", calculation)

/* Restart tomorrow and attempt again */