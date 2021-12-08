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
const equalsButton = document.querySelectorAll("#equals")
const body = document.body
let number1
let number2 
let chosenOperator
let hasOperatorBeenChosen = null
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
    if (input.textContent === "/") {
        chosenOperator = "/"
    }
    else if (input.textContent === "*") {
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
    if (hasOperatorBeenChosen === null) {
        operatorConversion(this)
        textWrite(this)
        hasOperatorBeenChosen = true
    }
    else if (hasOperatorBeenChosen) {
        if (number2 === undefined) {
            console.log(operatorConversion(this))
            display.textContent.replace(chosenOperator, "")
            console.log(display.textContent)
            number2=number1
        }
        
        equals()
        operatorConversion(this)
        textWrite(this)
    }

}

function calculation() {
    answer = operate(chosenOperator,Number(number1),Number(number2))
    return
}

function equals() {
    calculation()
    display.textContent = answer
    number1 = answer
}

function keyChecker(input) {
    if (input.keyCode === 187) {
        equals()
        } 
}




buttonEventListenerAdd(numberButton, "click", numberButtonPress)
buttonEventListenerAdd(operatorButton, "click", operatorButtonPress)
buttonEventListenerAdd(equalsButton, "click", equals)
document.addEventListener("keydown", keyChecker)