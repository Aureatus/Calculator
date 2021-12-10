/* Variable Declaration */
const display = document.querySelector("#display")
const numberButton = document.querySelectorAll(".number")
const decimalPointButton = document.querySelectorAll("#decimalpoint")
const operatorButton = document.querySelectorAll(".operator")
const equalsButton = document.querySelectorAll("#equals")
const clearButton = document.querySelectorAll("#clear")
const deleteButton = document.querySelectorAll("#delete")
const body = document.body
let isFloatCalculation
let decimalPointAllowed = true
let isValid = true
let number1
let number2 
let chosenOperator
let hasOperatorBeenChosen = null
let answer
let lastItem

/* Function Calls */
buttonEventListenerAdd(numberButton, "click", numberButtonPress)
buttonEventListenerAdd(decimalPointButton, "click", decimalPointButtonPress)
buttonEventListenerAdd(operatorButton, "click", operatorButtonPress)
buttonEventListenerAdd(equalsButton, "click", equalsButtonPress)
buttonEventListenerAdd(clearButton, "click", clearButtonPress)
buttonEventListenerAdd(deleteButton, "click", deleteButtonPress)
document.addEventListener("keydown", keyChecker)

/* Input Function Declarations */

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

function decimalPointButtonPress() {
    if (decimalPointAllowed) {
        if (!hasOperatorBeenChosen) {
            textWrite(this)
            number1 = display.textContent
            decimalPointAllowed = false
        }
        else if(hasOperatorBeenChosen) {
            textWrite(this)
            number2 = display.textContent
            number2 = numberFormatter(number2)
            decimalPointAllowed = false
        }
    }
}

function operatorButtonPress() {
    decimalPointAllowed = true
    if (display.textContent === "") {
        return
    }
    else if (hasOperatorBeenChosen === null) {
        operatorConversion(this)
        textWrite(this)
        hasOperatorBeenChosen = true
    }
    else if (hasOperatorBeenChosen) {
        if (number1 === undefined) {
            return
        }
        else if (number2 === undefined) {    
            display.textContent.replace(chosenOperator, "")
            number2=number1
        }
        operatorConversion(this)
        equals()
        textWrite(this)
    }

}

function equalsButtonPress() {
    hasOperatorBeenChosen = null
    decimalPointAllowed = true
    equals()
}

function clearButtonPress() {
    number1 = undefined
    number2 = undefined
    chosenOperator = undefined
    hasOperatorBeenChosen = null
    answer = undefined
    operatorHtmlText = undefined
    display.textContent = ""
    isValid = true
    decimalPointAllowed = true
    lastItem = null
}

function deleteButtonPress() {
    let textArray = Array.from(display.textContent)
    for(i = textArray.length; i >= 0; i--) {
        if(textArray[i] === lastItem) {
            textArray.splice(i,1)
            display.textContent = textArray.join("")
        }
    }
}

function keyChecker(input) {
    if(input.shiftKey) {
        shiftKey(input)
    }
    else if (!input.shiftKey) {
        noShiftKey(input)

    }
}

/* SubFunctions */
function shiftKey(input) {
    switch (input.keyCode) {
        case 187:
            keyOperatorPress(document.querySelector("#container > buttons > button:nth-child(8)"))
            return
        case 56:
            keyOperatorPress(document.querySelector("#container > buttons > button:nth-child(2)"))
            return
    }
}

function noShiftKey(input) {
    switch (input.keyCode) {
        case 48:
            keyNumberPress(document.querySelector("#container > buttons > button:nth-child(16)"))
            return
        case 49:
            keyNumberPress(document.querySelector("#container > buttons > button:nth-child(13)"));
            return
        case 50:
            keyNumberPress(document.querySelector("#container > buttons > button:nth-child(14)"));
            return
        case 51:
            keyNumberPress(document.querySelector("#container > buttons > button:nth-child(15)"))
            return
        case 52:
            keyNumberPress(document.querySelector("#container > buttons > button:nth-child(9)"))
            return
        case 53:
            keyNumberPress(document.querySelector("#container > buttons > button:nth-child(10)"))
            return
        case 54:
            keyNumberPress(document.querySelector("#container > buttons > button:nth-child(11)"))
            return
        case 55:
            keyNumberPress(document.querySelector("#container > buttons > button:nth-child(5)"))
            return
        case 56:
            keyNumberPress(document.querySelector("#container > buttons > button:nth-child(6)"))
            return
        case 57:
            keyNumberPress(document.querySelector("#container > buttons > button:nth-child(7)"))
            return
        case 187:
            equalsButtonPress();
            return
        case 189:
            keyOperatorPress(document.querySelector("#container > buttons > button:nth-child(4)"))
            return
        case 191:
            keyOperatorPress(document.querySelector("#container > buttons > button:nth-child(3)"))
            return
        
    } 
}

function buttonEventListenerAdd(target, listener, functionToAdd) {
    for(let i=0; i < target.length; i++) {
        target[i].addEventListener(listener, functionToAdd);
    }
}

function textWrite(input) {
    let textToWrite = input.textContent;
    lastItem = input.textContent
    display.textContent += textToWrite;
} 

function numberFormatter(input) {
    input = input.replace(number1, "")
    input = input.replace(operatorHtmlText, "")
    return input
}

function keyNumberPress(input) {
    if (!hasOperatorBeenChosen) {
        textWrite(input)
        number1 = display.textContent
    }
    else if(hasOperatorBeenChosen) {
        textWrite(input)
        number2 = display.textContent
        number2 = numberFormatter(number2)
    }
}

function keyOperatorPress(input) {
    decimalPointAllowed = true
    if (display.textContent === "") {
        return
    }
    else if (hasOperatorBeenChosen === null) {
        operatorConversion(input)
        textWrite(input)
        hasOperatorBeenChosen = true
    }
    else if (hasOperatorBeenChosen) {
        if (number1 === undefined) {
            return
        }
        else if (number2 === undefined) {    
            display.textContent.replace(chosenOperator, "")
            number2=number1
        }
        operatorConversion(input)
        equals()
        textWrite(input)
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

function calculation() {
    answer = operate(chosenOperator,Number(number1),Number(number2))
    if (answer.toString().length > 10) {
        answer = (Math.round((answer*1000000000)))/1000000000
    }
    return
}

function equals() {
    if(number1 === undefined || number2 === undefined || chosenOperator === undefined) {
        return
    }
    else if(Number(number2) <= 0 && chosenOperator === "/") {
        display.textContent = "Nice try, not going to crash my calculator today!"
        return
    }
    else {
        calculation()
        display.textContent = answer
        number1 = answer
    }
}

/* Numerical Functions*/
function add(num1, num2) {
    if(num1.toString().includes(".") || num2.toString().includes(".")) {
        return ((num1*100) + (num2*100))/100
    }
    else {
        return num1 + num2
    }
}

function subtract(num1, num2) {
    if(num1.toString().includes(".") || num2.toString().includes(".")) {
        return ((num1*100) - (num2*100))/100
    }
    else {
        return num1 - num2
    }

}

function multiply(num1, num2) {
    if(num1.toString().includes(".") || num2.toString().includes(".")) {
        return ((num1*100) * (num2*100))/100000
    }
    else {
        return num1 * num2
    }
}

function divide(num1, num2) {
    if(num1.toString().includes(".") || num2.toString().includes(".")) {
        return ((num1*100000) / (num2*100000))/1
    }
    else {
        return num1 / num2
    }
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