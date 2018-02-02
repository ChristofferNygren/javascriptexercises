//Prompt user to add numbers
var a = prompt("Give me two numbers: ");

//Split string into array
var b = a.split(" ");

//Parse numbers from string
var numberOne = parseInt(b[0]);
var numberTwo = parseInt(b[1]);

//Log numbers and log added value of numbers
console.log('First number: ' +numberOne + '\n' + 'Second number: ' + numberTwo);
console.log('Added: ' + (numberOne+numberTwo));
