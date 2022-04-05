function restasumamultiplicacion(){
    var a,b,c;
    var respuesta;
    a=parseInt(prompt("digita el primer numero"));
    b=parseInt(prompt("digita el segundo numero"));
    c=parseInt(prompt("digita el tercer numero"));

    respuesta=a-b+c*2;
    alert("el total es la siguiente :"+respuesta)
}
function restaydivicion(){
    var a,b,c;
   var respuesta;
   a=parseInt(prompt("digita el primer numero"));
   b=parseInt(prompt("digita el segundo numero"));
   c=parseInt(prompt("digita el tercer numero"));
   respuesta=a-b/c;
   alert("la resta con divicion es la siguiente :"+ respuesta)
}
function restamasdivicionmasmultiplicacionmarsuma(){
    var a,b,c,d,e,respuesta;
    a=parseInt(prompt("digita el primer numero"));
   b=parseInt(prompt("digita el segundo numero"));
   c=parseInt(prompt("digita el tercer numero"));
   d=parseInt(prompt("digita el cuarto numero"));
   e=parseInt(prompt("digita el quinto  numero"));
  respuesta=a-b/c*d+e;
  alert("el resultado es :"+respuesta)
}  
function areadeunrectagulo(){
    var a,b,h;
    
   b=parseInt(prompt("digite la base"));
   h=parseInt(prompt("digite la altura"));
   a=b*h;
   alert("el area del rectagulo es :"+a)
}
function areadeuntriangulo(){
    var a,b,h;
    b=parseInt(prompt("digite la base"));
   h=parseInt(prompt("digite la altura"));
   a=b*h/2;
   alert("el area del rectagulo es :"+a)
}
function perimetrodeunhexagono(){
    var a=6,b,perimetro;
    
    b=parseInt(prompt("digita el  numero de lados"));
    perimetro=a*b;
    alert("el perimetro del hexagono es :"+perimetro)
}
function areadeuncuadrado(){
   var a,b,c;
  
   b=parseInt(prompt("digita el lado"));
   c=parseInt(prompt("digita el lado"));
   a=b*c;
   alert("El area del cuadrado es "+a)
   
}
function areadeltrapecio(){
    var a,b,c;
    b=parseInt(prompt("digita la base"));
    c=parseInt(prompt("digita la altura"));
    a=b*c/2;
    alert("El area del cuadrado es "+a)
}