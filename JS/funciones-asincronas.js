// setTimeout(() => {
//   console.log("Esta instrucci�n se ejecuta despu�s de 5 segundos");
// }, 5000);

// setInterval(() => {
//   console.log("Esta instrucci�n se ejecuta cada 5 segundos");
// }, 5000);

setTimeout(() => {
  console.log("Hola");//Primero en leerse, tercero en ejecutarse
  setTimeout(() => {
    console.log("Adi�s");//Segundo en leerse, �ltimo en ejecuci�n
  }, 500);
}, 3000);
setTimeout(() => {
  console.log("Buenas tardes");//Tercero en leerse, segundo en ejecutarse
}, 10);
console.log("Buenos d�as");//�ltimo en leerse, primero en ejecutarse
