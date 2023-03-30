// Ejercicio de Héctor

let palindromo = "radar";
let long = palindromo.length;
let palindromo1 = "";

console.log(long);

while (long >= 0) {
  palindromo1 += palindromo.charAt(long - 1);
  long--;
}
console.log("palindormo1 " + palindromo1);

if (palindromo === palindromo1) {
  console.log("La palabra " + palindromo + " es un palindromo");
} else {
  console.log("La palabra " + palindromo + " NO es un palindromo");
}

//Método reverse() David

function palindromeChecker(str) {
  const strReversed = str
  .split("") //Dividimos el string dado por usuario str por cada caracter
  .reverse() //Le damos la vuelta, hacemos el inverso
  .join("");  // Finalmente los unimos de nuevo para convertir a string

  //Devuelve una opción u otra al comparar el inverso y el string dado
  return strReversed === str ? "Es palindromo" : "No es palindromo";

}
console.log(palindromeChecker("anilina"));
console.log(palindromeChecker("hola"));
console.log(palindromeChecker("omo"));

//ChatGPT con Joaquin

function verificarPalindromo() {
    // Obtener el texto del elemento de entrada
    var inputString = document.getElementById("inputString").value;
    // Eliminar caracteres no alfabéticos y convertir todo el texto a minúsculas
    var normalizedString = inputString.replace(/[\W_]/g, "").toLowerCase();
    // Invertir el string
    var reversedString = normalizedString.split("").reverse().join("");
    // Comparar el string original con el invertido
    if (normalizedString === reversedString) {
        document.getElementById("resultado").innerHTML = "El string es un palindromo";
    } else {
        document.getElementById("resultado").innerHTML = "El string no es un palindromo";
    }
}


//FOR

const palindromo2 = "aibofobia";
let inverso = "";

console.log(palindromo2.charAt(palindromo2.length-1));
console.log(palindromo2.length-1);

for (let i = palindromo2.length-1; i >=0; i--) {
    inverso += palindromo2.charAt(i);
}
console.log(inverso);

if (palindromo2 == inverso) {
    console.log("La variable palindromo2: " + palindromo2 + " es un palindromo");
} else {
    console.log("La variable palindromo2: " + palindromo2 + " NO es un palindromo");
}