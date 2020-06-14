const defaultResult = 0;
let result = defaultResult;
const ADD = 'ADD';
const SUBTRACT = 'SUBTRACT';
const MULTIPLY = 'MULTIPLY';
const DIVIDE = 'DIVIDE'

function getUserInput(){
    return parseInt(userInput.value)
}

function rumiPrintera(result, text) {
    currentResultOutput.textContent = result;
    currentCalculationOutput.textContent = text;
}

function createAndWriteOutput(initialResult, operator, enteredNumber, result){
const description = `${initialResult} ${operator} ${enteredNumber}`;
outputResult(description, result)
}

function consolaPrinter(operation, initialResult, enteredNumber, result) {
    const vremennaKutiq = {
        operation: operation,
        initialResult: initialResult,
        enteredNumber: enteredNumber,
        result: result
    }
    kutiqPulnaSTaini.push(vremennaKutiq);
    console.log(kutiqPulnaSTaini)
}

let kutiqPulnaSTaini = [];

function calculation(calcType){
    let enteredNumber = getUserInput();
    let copy = result;
    let mathOperator;
if(calcType === ADD ){
    result = result + enteredNumber; 
    mathOperator = '+'  
} else if (calcType === SUBTRACT){
    result = result - enteredNumber; 
    mathOperator = '-'
} else if (calcType === MULTIPLY){
    result = result * enteredNumber; 
    mathOperator = '*'
} else if (calcType === DIVIDE){
    result = result / enteredNumber; 
    mathOperator = '/'
}

createAndWriteOutput(copy, mathOperator, enteredNumber, result);
consolaPrinter(calcType, mathOperator, enteredNumber, result)
}
function add(){
    calculation(ADD);

}

function subtract(){
    calculation(SUBTRACT);
}

function multiply(){
    calculation(MULTIPLY);
}

function divide(){
    calculation(DIVIDE);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide)


