//OPERATIONS FUNCTIONS-------------------------------------------------------------------------------
function add(a,b){
    return a+b
}

function subtract(a,b){
    return a-b
}

function multiply(a,b){
    return a*b
}

function divide(a,b){
    return a/b
}

function operate(a,b,operation){
    if(operation === 'sum') return add(a,b)
    if(operation === 'subtraction') return subtract(a,b)
    if(operation === 'multiplication') return multiply(a,b)
    if(operation === 'division') return divide(a,b)
}

//DISPLAY FUNCTIONALITY-------------------------------------------------------------------------------
let result = undefined

const operationDisplay = document.querySelector('.operation-display')
const resultDisplay = document.querySelector('.result-display')

//DIGIT BUTTON FUNCTIONALITY--------------------------------------------------------------------------
const digitButtons = document.querySelectorAll('.digit');
digitButtons.forEach(digit => digit.addEventListener('mousedown', () => addDigitToDisplay(digit)))
digitButtons.forEach(digit => digit.addEventListener('mouseup', () => digit.classList.remove('pressed')))

function addDigitToDisplay(digit){
    if(result === undefined){
        operationDisplay.innerHTML = ''
        result = null
    }  
    digit.classList.add('pressed')
    operationDisplay.innerHTML = operationDisplay.innerHTML.concat(digit.value) 
}

const floatButton = document.querySelector('.float');
floatButton.addEventListener('mousedown', () => addDigitToDisplay(floatButton))
floatButton.addEventListener('mouseup', () => floatButton.classList.remove('pressed'))

//OPERATION BUTTONS FUNCTIONALITY---------------------------------------------------------------------
let opType = undefined;

const operationButtons = document.querySelectorAll('.operation')
operationButtons.forEach(operation => operation.addEventListener('mousedown', () => addOperationToDisplay(operation)))
operationButtons.forEach(operation => operation.addEventListener('mouseup', () => operation.classList.remove('pressed')))

function addOperationToDisplay(operation){
    if(result === undefined){
        operationDisplay.innerHTML = ''
        result = null
    }
    operation.classList.add('pressed')
    opType = operation.id
    operationDisplay.innerHTML = operationDisplay.innerHTML.concat(operation.value)
}

//EQUALS BUTTON FUNCTIONALITY-------------------------------------------------------------------------
const equalButton = document.querySelector('.equals')
equalButton.addEventListener('mousedown', () => showResult(operationDisplay.innerHTML))
equalButton.addEventListener('mouseup', () => equalButton.classList.remove('pressed'))

function showResult(operation){
    let param1;
    let param2;
    equalButton.classList.add('pressed')
    if (opType === 'sum') {
        param1 = Number(operation.substring(0, operation.indexOf('+')))
        param2 = Number(operation.substring(operation.indexOf('+')+1))
    }
    if (opType === 'subtraction') {
        param1 = Number(operation.substring(0, operation.indexOf('-')))
        param2 = Number(operation.substring(operation.indexOf('-')+1))
    }
    if (opType === 'multiplication') {
        param1 = Number(operation.substring(0, operation.indexOf('*')))
        param2 = Number(operation.substring(operation.indexOf('*')+1))
    }
    if (opType === 'division') {
        param1 = Number(operation.substring(0, operation.indexOf('/')))
        param2 = Number(operation.substring(operation.indexOf('/')+1))
    }
    result = operate(param1, param2, opType)
    if(operation === '') resultDisplay.innerHTML = ''
    else if(isNaN(result)) resultDisplay.innerHTML = 'Syntax Error'
    else resultDisplay.innerHTML = result
    result = undefined
}

//DELETE BUTTONS FUNCTIONALITY------------------------------------------------------------------------
const delButton = document.querySelector('.delete')
delButton.addEventListener('mousedown', deleteSymbol)
delButton.addEventListener('mouseup', () => delButton.classList.remove('pressed'))

function deleteSymbol(){
    delButton.classList.add('pressed')
    operationDisplay.innerHTML = operationDisplay.innerHTML.slice(0,-1)
}

const acButton = document.querySelector('.clear-all')
acButton.addEventListener('mousedown', clearAll)
acButton.addEventListener('mouseup', () => acButton.classList.remove('pressed'))

function clearAll(){
    acButton.classList.add('pressed')
    operationDisplay.innerHTML = ''
    resultDisplay.innerHTML = ''
}