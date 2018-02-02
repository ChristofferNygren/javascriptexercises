
document.querySelector('#submitNum').addEventListener('click', function () {
    var firstNum = parseInt(document.querySelector('#firstNum').value);
    var secondNum = parseInt(document.querySelector('#secondNum').value);

    console.log(firstNum+secondNum);

    if (firstNum>secondNum && secondNum<firstNum){
        document.querySelector('#displayNum').innerHTML = firstNum;
    }
    else{
        document.querySelector('#displayNum').innerHTML = firstNum;
    }
});