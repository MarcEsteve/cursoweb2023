document.getElementById("demo").innerHTML = "Marc Smith";
//Equivalente comillas dobles o simples
// document.getElementById("demo").innerHTML = 'Marc Smith';
var cms = "WordPress"; // Comillas dobles
var cms = 'WordPress'; // Comillas simples
// Cuando hay comillas dobles en el texto
var cms = 'El cms se llama "WordPress"';
document.write(cms);
// Propiedad lenght devolveria em número la extensión del string, en el ejemplo= 26
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;
console.log(txt);
console.log(sln);

// JavaScript no entenderia esta cadena de texto por las comillas dobles dentro de dobles
// var x = "We are the so-called "Vikings" from the north.";

// Deberiamos escribirlo asi:

var x = "We are the so-called \"Vikings\" from the north.";