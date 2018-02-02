//Creates div and places it into body
var div = document.createElement('DIV');
document.body.appendChild(div);
//Add some styling to the div
div.style.backgroundColor ="red";
div.style.border ="solid black 2px";

//Creates h1 and text and places text into h1
var header = document.createElement('H1');
var text = document.createTextNode('My text node');
header.appendChild(text);

//Creates p and text and places text into p
var content = document.createElement('P');
var contentText = document.createTextNode('lorem....');
content.appendChild(contentText);

//Places p and h1 into div
div.appendChild(header);
div.appendChild(content);

//Adds row and cells to table
var myTable = document.querySelector('#myTable');

document.querySelector('button[name="add"]').addEventListener('click', function () {
    console.log("add");
    var row = myTable.insertRow(1);
    row.insertCell(0).innerHTML ="0";
    row.insertCell(1).innerHTML ="1";
    row.insertCell(2).innerHTML ="2";
});

//Removes row and cells from table
document.querySelector('button[name="remove"]').addEventListener('click', function () {
    console.log("remove");
    myTable.deleteRow(1);
});

//Logs window inner height and inner width
window.addEventListener('resize', function () {
    console.clear();
    console.log("Height " + window.innerHeight);
    console.log("Width " + window.innerWidth);
});

//Logs value when correct key is pressed
document.querySelector('input[name="myInput"]').addEventListener('keypress', function () {
    var e = event.keyCode;
    if (e === 13){
        console.log(document.querySelector('input[name="myInput"]').value);
        console.log(document.querySelector('input[name="myInput"]').getAttribute('value'));
    }
});