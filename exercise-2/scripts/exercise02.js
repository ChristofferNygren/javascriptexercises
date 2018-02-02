/*var input = prompt("Please enter a number: ");
console.log(Math.sqrt(input));*/

document.querySelector('button[type="submit"]').addEventListener('click', function () {
    var input = document.querySelector('input[name="numberInput"]').value;
    document.querySelector('#output').innerHTML = Math.sqrt(Number(input));
});