function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}


const num1 = parseInt(prompt("Please enter the first number_"));
const num2 = parseInt(prompt("Please enter the second number_"));
const answer = divide(num1, num2);

alert(answer);