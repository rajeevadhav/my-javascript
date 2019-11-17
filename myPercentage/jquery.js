let java=$('#java').val;
let php=$('#php').val;
let python=$('#python').val;
let angular=$('#angular').val;
let react=$('#react').val;
let display=$('#display');
let result=$('#result');

$('#calculate').click(function(){
    let total=parseFloat(java)+parseFloat(php)+parseFloat(python)+parseFloat(angular)+parseFloat(react);
    let per=total/5;
    console.log(per);
});