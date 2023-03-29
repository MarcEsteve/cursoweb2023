let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length);

let texto = "Apple, Banana, Kiwi";
let part = texto.slice(15, 19); //Kiwi
console.log(part);
part = texto.slice(7); //Banana, Kiwi (desde el valor 7)
console.log(part);
part = texto.slice(-12); //Banana, Kiwi (los 12 últimos valores)
console.log(part);
part = texto.slice(-12, -6); //Banana (del -12 al -6 no incluido)
console.log(part);
//Substring método
let str = "Manzana, Plátano, Kiwi";
document.getElementById("subs").innerHTML = str.substring(9, 16);
console.log(str);

//Método replace()

function reemplazar() {
  let textoReemplazable = document.getElementById("replace").innerHTML;
  document.getElementById("replace").innerHTML = textoReemplazable.replace(
    "Microsoft",
    "W3Schools"
  );
  //   replace(/MICROSOFT/i, "W3Schools"); //reemplaza con cualquier mayúscula y minúscula de la palabra /i uso del flag
}
//replaceAll()
let textoGatosPerros =
  "I love cats. Cats are very easy to love. Cats are very popular.";
console.log(textoGatosPerros);
textoGatosPerros = textoGatosPerros.replaceAll("Cats", "Dogs");
console.log(textoGatosPerros);
textoGatosPerros = textoGatosPerros.replaceAll("cats", "dogs");
console.log(textoGatosPerros);

document.getElementById("todo").innerHTML = textoGatosPerros;

//Concat()
let nombre = "Marc";
let apellido = "Esteve Garcia";
let nombreCompleto = nombre.concat(" ", apellido);
console.log(nombreCompleto);

//trim()

let text1 = "     Hello World!     ";
let text2 = text1.trim();

console.log(text1);
console.log(text2);

document.getElementById("trim").innerHTML =
  "Longitud text1 = " + text1.length + "<br>Longitud text2 = " + text2.length;

//padStart()

let textoPadeado = "50";
textoPadeado = textoPadeado.padStart(8,"x");
console.log(textoPadeado);

document.getElementById("padStart").innerHTML = textoPadeado;
//padEnd() equivalente a padStart() pero al final del texto

//charAt()
var textoBuscar = "HELLO WORLD";
console.log(textoBuscar.charAt(6));