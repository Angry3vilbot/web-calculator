let textbar = document.getElementById('numberfield')
let numberContainer = document.getElementById('numberContainer').childNodes
let operationContainer = document.getElementById('operationContainer').childNodes
let operationContainerTwo = document.getElementById('operationContainerTwo').childNodes
let clear = document.getElementById('clear')
let equals = document.getElementById('equals')
let number1 = 0
let number2 = 0
let isSecondNumber = false
let operator = ''

window.onload = textbar.value = ''

function add(numb1, numb2) {
    return Number(numb1)+Number(numb2)
}
function subtract(numb1, numb2) {
    return(parseFloat(numb1)-parseFloat(numb2))
}
function multiply(numb1, numb2) {
    return(parseInt(numb1)*parseInt(numb2))
}
function divide(numb1, numb2) {
	if (numb2 === 0) {
		return('To infinity and beyond!')
	}
    return(parseInt(numb1)/parseInt(numb2))
}
function exponent(numb1, numb2){
    return(parseInt(numb1)**parseInt(numb2))
}
function operate(num1, operation, num2) {
    switch(operation){
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case 'x':
        case '*':
            return multiply(num1, num2);
        case '÷':
        case '/':   
            return divide(num1, num2);
        case '^':                       
            return exponent(num1, num2);
        default:
            console.log("error");
            console.log(operator);
    }
}
function writeNumber(){
    textbar.value += this.innerHTML
}
function operatorSelect(){
    operator = this.innerHTML
    number1 = Number(textbar.value)
    textbar.value = null
}
function clearOperator(){
    textbar.value = null
    number1 = 0
    number2 = 0
    operator = ''
}
function equalsOperator(){
    number2 = Number(textbar.value)
    textbar.value = operate(number1, operator, number2)
}
numberContainer.forEach(element => element.addEventListener('click', writeNumber))
operationContainer.forEach(element => element.addEventListener('click', operatorSelect))
operationContainerTwo.forEach(element => element.addEventListener('click', operatorSelect))
clear.removeEventListener('click', operatorSelect)
clear.addEventListener('click', clearOperator)
equals.removeEventListener('click', operatorSelect)
equals.addEventListener('click', equalsOperator)