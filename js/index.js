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

let operationButtons = document.getElementsByClassName('operation-button');

for (let i = 0; i < operationButtons.length; i++) {
    operationButtons[i].addEventListener('click', onOperationButtonClick);
}
