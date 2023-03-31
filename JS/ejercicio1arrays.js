//Ejercicio 1 Gemma
var matriz = [];
// for (i = 0; i < 6; i++) {
//   matriz.push(i);
// }

//Asigna 6 valores aleatorios
for (i = 0; i < 6; i++) {
  matriz.push(Math.round(Math.random() * 100));
}

console.log(matriz);

for (let pepito of matriz) {
  console.log(pepito);
}
