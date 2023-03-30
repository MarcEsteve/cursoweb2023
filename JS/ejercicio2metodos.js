let txt1="pephghgfhfghito" , text2 = "xinganito";

//Comparamos las dos primeras letras de cada string
if (txt1.charAt(0) === text2[0]){
    console.log("SI tienen la misma letra inicial");
} else {
    console.log("NO tienen la misma letra incial");
}

//Comparamos las dos últimas letras de cada string
if (txt1.charAt(txt1.length-1) === text2[text2.length-1]){
    console.log("y SI tienen la misma letra final");
} else {
    console.log("y NO tienen la misma letra final");
}