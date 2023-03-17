var dia;
var fechaDia = new Date().getDay();
// var fechaDia = 432432;

var mes;
var fechaMes = new Date().getMonth();

switch (fechaDia) {
  case 0:
    dia = "Domingo";
    break;

  case 1:
    dia = "Lunes";
    break;

  case 2:
    dia = "Martes";
    break;

  case 3:
    dia = "Miércoles";
    break;

  case 4:
    dia = "Jueves";
    break;

  case 5:
    dia = "Viernes";
    break;

  case 6:
    dia = "Sábado";
    break;
  default:
    dia="(No es un dia de la semana)"
}

switch (key) {
  case value:
    
    break;

  default:
    break;
}

switch (fechaMes) {
  case 0:
    mes = "Enero";
    break;
  case 1:
    mes = "Febrero";
    break;
  case 2:
    mes = "Marzo";
    break;
  default:
    mes ="otro mes distinto a Enero, Febrero y Marzo"
    break;
}

// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

document.getElementById("texto").innerHTML = "Hoy es " + dia + " y el mes es " + mes;
document.write(new Date() + "<br>" + new Date().getDay() + "<br>" + new Date().getMonth()+ "<br>");

document.write("RECORDATORIO: dias 0 Domingo al 6 Sábado y meses 0 Enero y hasta el 11 Diciembre");