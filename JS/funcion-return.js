//Declarar
var x, y;

//Asignar
x = multiplica(4, 3);
y = divide(8,4);

//Acciones
document.getElementById("mult").innerHTML = "El resultado de multiplicar 4 * 3 es " + x;
document.getElementById("mult").innerHTML = "El resultado de dividir 8 / 4 es " + y;


//Funciones
function multiplica(a, b) {
  return a * b;
}

function divide(a, b) {
    return a / b;
  }