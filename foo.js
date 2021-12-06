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
const displayValue = display.textContent
/* TextWrite Section*/
function buttonEventListenerAdd(target, listener, functionToAdd) {
    for(let i=0; i < target.length; i++) {
        target[i].addEventListener(listener, functionToAdd);
    }
}

function textWrite() {
    let currentText = display.textContent;
    let textToWrite = this.textContent;
    display.textContent += textToWrite;

} 

buttonEventListenerAdd(numberButton, "click", textWrite)

