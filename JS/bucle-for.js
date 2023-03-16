function myFunction() {
  var x = "",
    i;

//   for (i = 1; i <= 6; i++) {
//     x = x + "<h" + i + ">Titular " + i + "</h" + i + ">";
//   }

    //Del titular 6 al 1
  for (i = 6; i >= 1; i--) {
    x = x + "<h" + i + ">Titular " + i + "</h" + i + ">";
  }

  document.getElementById("demo").innerHTML = x;
}
