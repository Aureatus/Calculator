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

function buttonEventListenerAdd(target, listener, functionToAdd) {
    for(let i=0; i < target.length; i++) {
        target[i].addEventListener(listener, functionToAdd);
    }
}

const display = document.querySelector("#display")
const numberButton = document.querySelectorAll(".number")
const operatorButton = document.querySelectorAll(".operator")
let displayValue = display.textContent

buttonEventListenerAdd(numberButton, "click", numberButtonPress)
buttonEventListenerAdd(operatorButton, "click", operatorButtonPress)
function numberButtonPress() {
    textWrite(this)
}

function textWrite(input) {
    let textToWrite = input.textContent;
    display.textContent += textToWrite;
} 

function operatorButtonPress () {
    textWrite(this)
}






























/*
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


const display = document.querySelector("#display")
const numberButton = document.querySelectorAll(".number")
const operatorButton = document.querySelectorAll(".operator")
const body = document.body
let number1
let number2 
let chosenOperator
let hasOperatorBeenChosen = false
let answer
function buttonEventListenerAdd(target, listener, functionToAdd) {
    for(let i=0; i < target.length; i++) {
        target[i].addEventListener(listener, functionToAdd);
    }
}

function textWrite(input) {
    let textToWrite = input.textContent;
    display.textContent += textToWrite;
} 

function numberFormatter(input) {
    input = input.replace(number1, "")
    input = input.replace(operatorHtmlText, "")
    return input
}
function numberButtonPress() {
    if (!hasOperatorBeenChosen) {
        textWrite(this)
        number1 = display.textContent
    }
    else if(hasOperatorBeenChosen) {
        textWrite(this)
        number2 = display.textContent
        number2 = numberFormatter(number2)
    }
    }

function operatorConversion(input) {
    operatorHtmlText = input.textContent
    if (input.textContent === "÷") {
        chosenOperator = "/"
    }
    else if (input.textContent === "×") {
        chosenOperator = "*"
    }
    else if (input.textContent === "+") {
        chosenOperator = "+"
    }
    else if (input.textContent === "-") {
        chosenOperator = "-"
    }
}
function operatorButtonPress() {
    if (!hasOperatorBeenChosen) {
        hasOperatorBeenChosen = true
        operatorConversion(this)
        textWrite(this)
    }
    else return

}

function calculation() {
    answer = operate(Number(chosenOperator,number1,number2))
    return
}

function equals() {
    calculation()
    console.log(answer)
}

function keyChecker(input) {
    if (input.keyCode === 187) {
        equals()
        } 
}




buttonEventListenerAdd(numberButton, "click", numberButtonPress)
buttonEventListenerAdd(operatorButton, "click", operatorButtonPress)
document.addEventListener("keydown", keyChecker)*/