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

let str = "Manzana, Plátano, Kiwi";
document.getElementById("subs").innerHTML = str.substring(9,16);
console.log(str);