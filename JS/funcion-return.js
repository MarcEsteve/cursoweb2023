//Declarar
var x, y, z, w;

const multiplicar = (a,b) => (a*b);
const dividir = (a,b) => (a*b);
const sumar = (a,b) => (a*b);
const restar = (a,b) => (a*b);

//Asignar
x = multiplicar(4, 3);
y = dividir(8, 4);
z = sumar(3, 4);
w = restar(13, 3);

//Acciones
document.getElementById("mult").innerHTML =
  "El resultado de multiplicar 4 * 3 es " + x;
document.getElementById("div").innerHTML =
  "El resultado de dividir 8 / 4 es " + y;
document.getElementById("sum").innerHTML =
  "El resultado de sumar 3 + 4 es " + z;
document.getElementById("res").innerHTML =
  "El resultado de restar 13 - 3 es " + w;

//Funciones
// function multiplicar(a, b) {
//   return a * b;
// }
// function dividir(a, b) {
//   return a / b;
// }
// function sumar(a, b) {
//   return a + b;
// }
// function restar(a, b) {
//   return a - b;
// }