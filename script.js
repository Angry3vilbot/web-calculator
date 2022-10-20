let textbar = document.getElementById('numberfield')

function add(num1, num2) {
	return(num1+num2)
}
function subtract(num1, num2) {
	return(num1-num2)
}
function multiply(num1, num2) {
	return(num1*num2)
}
function divide(num1, num2) {
	return(num1/num2)
}

function operate(num1, operation, num2) {
	switch(operation){
		case '+':
			textbar.setAttribute('value', add(num1, num2));
			break
		case '-':
			textbar.setAttribute('value', subtract(num1, num2));
			break
		case '*':
			textbar.setAttribute('value', multiply(num1, num2));
			break
		case '÷':
		case '/':
			textbar.setAttribute('value', divide(num1, num2));
			break
	}
}