function add(num1, num2)
{
	return num1 + num2;
}
function subtract(num1, num2)
{
	return num1 - num2;
}
function multiply(num1, num2)
{
	return num1 * num2;

}
function divide(num1, num2)
{
	return num1 / num2;
}

function calculator()
{
	var input = prompt("Enter an operation [+,-,*,/]");
	var num1 = Number(prompt("Enter your first number", ""));
	var num2 = Number(prompt("Enter you second number", ""));
		
	var answer;
		
	switch(input)
	{
		case "+": answer = add(num1,num2); break;
		case "-": answer = subtract(num1, num2); break;
		case "*": answer = multiply(num1, num2); break;
		case "/": answer = divide(num1,num2); break;
	}
	alert("The answer is " + answer);

}
