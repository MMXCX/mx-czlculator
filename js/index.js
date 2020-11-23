let buttonPlus = document.getElementById('buttonPlus');
let buttonMinus = document.getElementById('buttonMinus');
let buttonMultiply = document.getElementById('buttonMultiply');
let buttonDivide = document.getElementById('buttonDivide');

let input1 = document.getElementById('number1');
let input2 = document.getElementById('number2');

function makeOperation(operationCode) {
    let result;
    let number1 = input1.valueAsNumber;
    let number2 = input2.valueAsNumber;

    if (operationCode === '+') result = number1 + number2;
    if (operationCode === '-') result = number1 - number2;
    if (operationCode === '*') result = number1 * number2;
    if (operationCode === '/') result = number1 / number2;
    console.log(result);
}

function onOperationButtonClick(eventObject) {
    let clickedElement = eventObject.currentTarget;
    let operation = clickedElement.innerHTML;
    makeOperation(operation);
}

let operationButtons = [
    buttonPlus,
    buttonMinus,
    buttonMultiply,
    buttonDivide
];

function addCommonEventListener(i) {
    operationButtons[i].addEventListener('click', onOperationButtonClick);
}

for (let i = 0; i < operationButtons.length; i++) {
    addCommonEventListener(i);
}