var c;
function Num(val){
    if(val=='/' ||val=='-' ||val=='+' ||val=='*' ) {}
    else{
    if(c==1){
        clr();
    }}
    document.getElementById('result').value += val;
    c=0;
}
function equal(){
    let x = document.getElementById('result').value;
    document.getElementById('result').value = eval(x);
    c=1
}
function clr(){
    document.getElementById('result').value = '';
}
function del(){
    var x = document.getElementById('result').value;
    document.getElementById('result').value = x.slice(0,-1);
}
function p(){
    var x=document.getElementById('result').value;
    document.getElementById('result').value= Math.pow(x,2);
}
function s(){
    var x=document.getElementById('result').value;
    document.getElementById('result').value= Math.sqrt(x,2);
}
function i(){
    var x=document.getElementById('result').value;
    document.getElementById('result').value= 1/x;
}

