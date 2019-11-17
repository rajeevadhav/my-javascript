let java=document.getElementById('java').value;
let php=document.getElementById('php').value;
let python=document.getElementById('python').value;
let angular=document.getElementById('angular').value;
let react=document.getElementById('react').value;
let calculate=document.getElementById('calculate');
let display=document.getElementById('display');
let result=document.getElementById('result');

calculate.addEventListener('click',function () {
    let total=parseFloat(java)+parseFloat(php)+parseFloat(python)+parseFloat(angular)+parseFloat(react);
    let per=total/5;
    display.innerHTML=per;

    if(per>35)
    {
        result.innerHTML="Congratulations You Are Pass!";
    }
    else
    {
        result.innerHTML="You Are Fail !";
    }
});