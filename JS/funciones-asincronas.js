// setTimeout(() => {
//   console.log("Esta instrucción se ejecuta después de 5 segundos");
// }, 5000);

// setInterval(() => {
//   console.log("Esta instrucción se ejecuta cada 5 segundos");
// }, 5000);

setTimeout(() => {
  console.log("Hola");//Primero en leerse, tercero en ejecutarse
  setTimeout(() => {
    console.log("Adiós");//Segundo en leerse, último en ejecución
  }, 500);
}, 3000);
setTimeout(() => {
  console.log("Buenas tardes");//Tercero en leerse, segundo en ejecutarse
}, 10);
console.log("Buenos días");//Último en leerse, primero en ejecutarse
