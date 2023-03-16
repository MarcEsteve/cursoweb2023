var text = "";
//Del 0 al 9
// var i = 0;
// while (i < 10) {
//     text += "<br>El número es " + i;
//     i++;
// }

//Del 9 al 0
// var i = 9;
// while (i >= 0) {
//     text += "<br>El número es " + i;
//     i--;
// }

//Del 15 al 25 de dos en dos
var i = 15;
while (i <= 25) {
    text += "<br>El número es " + i;
    i = i + 2;
}
document.getElementById("demo").innerHTML = text;