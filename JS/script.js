let persona = prompt("Escribe un nombre", "Ejemplo Marc");
if (persona != null) {
  document.getElementById("persona").innerHTML =
    "Hola " + persona + "! Qué tal?";
}