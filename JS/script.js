let persona = prompt("Escribe un nombre", "Ejemplo Marc");
if (persona != null) {
  document.getElementById("persona").innerHTML =
    "Hola " + persona + "! Qué tal?";
}

let color1 = prompt("Escribe un color", "Ejemplo: rojo");
let color2 = prompt("Escribe un segundo color", "Ejemplo: amarillo");
let color3 = prompt("Escribe un tercer color", "Ejemplo: azul");

if ((color1 != null) && (color2 != null) && (color1 != null)) {
    document.getElementById("colores").innerHTML = "Los colores son: " + color1 + ", " + color2  + " y " + color3;
}