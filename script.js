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