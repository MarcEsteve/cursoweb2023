function FahrenheiTaCelsius(f) {
  return (5 / 9) * (f - 32);
}

document.getElementById("temp").innerHTML = "50 �F son " + Math.round(FahrenheiTaCelsius(50)) + " �C";
