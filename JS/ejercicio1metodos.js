let txt1="pepito" , text2 = "penganito";

if (txt1.charAt(0) === text2[0]){ //&&(txt1.charAt(1) === charAt(1)) si revisamos las dos primeras letras
    console.log("SI tienen la misma letra inicial (charAt())");
} else {
    console.log("NO tienen la misma letra incial (charAt())");
}
//Revisa los dos primeros caracteres
if (txt1.slice(0,2) === text2.slice(0,2)){
    console.log("SI tienen las dos primeras letras iguales (slice())");
} else {
    console.log("NO tienen las mismas dos primeras letras (slice())");
}