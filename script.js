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

window.onload = textbar.value = null

function add(numb1, numb2) {
	return(Number(numb1)+Number(numb2))
}
function subtract(numb1, numb2) {
	return(parseInt(numb1)-parseInt(numb2))
}
function multiply(numb1, numb2) {
	return(parseInt(numb1)*parseInt(numb2))
}
function divide(numb1, numb2) {
	return(parseInt(numb1)/parseInt(numb2))
}
function exponent(numb1, numb2){
	return(parseInt(numb1)**parseInt(numb2))
}
function operate(num1, operation, num2) {
	// switch(operation){
	// 	case "+":
	// 		console.log(typeof(num1) + '  ' + typeof(num2));
	// 		console.log(num1 + '  ' + num2);
	// 		console.log(num1 + num2);
	// 		console.log(operation + '1');
	// 		textbar.setAttribute('value', add(num1, num2));
	// 		console.log(typeof(num1) + '  ' + typeof(num2));
	// 		break;
	// 	case "'-'":
	// 		console.log(num1 + '  ' + num2);
	// 		console.log(operator + '2');
	// 		textbar.setAttribute('value', subtract(num1, num2));
	// 		break;
	// 	case 'x':
	// 	case '*':
	// 		console.log(num1 + '  ' + num2);
	// 		console.log(operator + '3');
	// 		textbar.setAttribute('value', multiply(num1, num2));
	// 		break;
	// 	case '÷':
	// 	case '/':
	// 		console.log(num1 + '  ' + num2);
	// 		console.log(operator + '4');		
	// 		textbar.setAttribute('value', divide(num1, num2));
	// 		break;
	// 	case '^':
	// 		console.log(num1 + '  ' + num2);			
	// 		console.log(operator + '5');						
	// 		textbar.setAttribute('value', exponent(num1, num2));
	// 		break;
	// 	default:
	// 		console.log("EEEERRRRROOOOOORRRR");
	// 		console.log(operator);
	// }
	if (operation === '+') {
		return(textbar.setAttribute('value', add(number1, number2)));
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
	console.log(operate(number1, operator, number2))
	textbar.value = operate(number1, operator, number2)
}
numberContainer.forEach(element => element.addEventListener('click', writeNumber))
operationContainer.forEach(element => element.addEventListener('click', operatorSelect))
operationContainerTwo.forEach(element => element.addEventListener('click', operatorSelect))
clear.removeEventListener('click', operatorSelect)
clear.addEventListener('click', clearOperator)
equals.removeEventListener('click', operatorSelect)
equals.addEventListener('click', equalsOperator)