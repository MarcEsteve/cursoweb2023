//Declaración de variables
var x, y, z;

//Asignación de variables 
x=5.5;
y=4.003;
z=3.9999;

//Acciones/cálculos
x=Math.round(x);
document.getElementById("resulround").innerHTML = "(x es 5,5) El Math.round(x) es: " + x;
y=Math.ceil(y);
document.getElementById("resulceil").innerHTML = "(y es 4,003) El Math.ceil(y) es: " + y;
z=Math.floor(z);
document.getElementById("resulfloor").innerHTML = "(z es 3,9999) El Math.floor(z) es: " + z;