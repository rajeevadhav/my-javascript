let firstNumber=document.querySelector('#firstNumber');
let secondNumber=document.querySelector('#secondNumber');
let operatorButton=document.querySelector('#operator');
let eqaualsButton=document.querySelector('#equals');
let resultButton=document.querySelector('#result');
let addButton=document.querySelector('#addButton');
let subButton=document.querySelector('#subButton');
let mulButton=document.querySelector('#mulButton');
let divButton=document.querySelector('#divButton');
let resetButton=document.querySelector('#reset');

addButton.addEventListener('click',function () {
    operatorButton.innerText=addButton.innerText;
    calculation();
});
subButton.addEventListener('click',function () {
    operatorButton.innerText=subButton.innerText;
    calculation();
});
mulButton.addEventListener('click',function () {
    operatorButton.innerText=mulButton.innerText;
    calculation();
});
divButton.addEventListener('click',function () {
   operatorButton.innerText=divButton.innerText;
   calculation();
});



let calculation=()=>
{
    let calOperation=operatorButton.innerText;
    let fNo=parseFloat(firstNumber.value);
    let sNo=parseFloat(secondNumber.value);
    switch (calOperation)
    {
        case "+":resultButton.innerText=fNo + sNo;
                break;
        case "-":resultButton.innerText=fNo - sNo;
                break;
        case "*":resultButton.innerText=fNo * sNo;
                break;
        case "/":resultButton.innerText=fNo / sNo;
                break;

    }
}

resetButton.addEventListener('click',function () {
    firstNumber.value=' ';
    secondNumber.value='';
    operatorButton.innerText='+';
    resultButton.innerText='Result';
});