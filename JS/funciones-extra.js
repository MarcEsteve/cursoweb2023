//var let const
//Crear una funci�n an�nima asignada a una variable
let sumando = function (a, b) {
  console.log(a + b);
};

// 5
sumando(2, 3);
//10
sumando(7, 3);

//Funci�n autoejecutable
(function saludar() {
  console.log("Hola");
})();
// error, no puede ser llamada "invocada"
// saludar();

// funci�n normal
function funcion(altura) {
  return (5 * altura) / 2;
}
//funci�n an�nima
let funcion2 = function (altura) {
    return (5 * altura) / 2;
  };
// funci�n de flecha
const funcion3 = (altura) => {
  return (5 * altura) / 2;
};
// forma simplificada de la funci�n de flecha
const funcion4 = (altura) => (5 * altura) / 2;

console.log(funcion(3));
console.log(funcion2(3));
console.log(funcion3(3));
console.log(funcion4(3));
//return 7.5