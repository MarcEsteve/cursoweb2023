var hour = new Date().getHours();

var fecha = new Date();

hour=15;

var saludo;

if (hour >=6 && hour <=12) {
    saludo = "Buenos dias";
} else if (hour > 12 && hour <=19) {
// } else if (hour >= 13 && hour <=19) {
    saludo = "Buenas tardes";
} else {
    saludo = "Buenas noches";
}

document.getElementById("buenas").innerHTML = saludo;
document.write(fecha);