//Buena praxis con uso de variables:
//1. DECLARAR (Crear) la variable
var x,y,z;
//2. Asignar VALOR (indirectamente tambi�n TIPO)
x = "6";
y= "9";
//y = "9 patatas"; no funcionaria
//3. Realizar C�LCULOS de cualquier �ndole
z = x*y; //Equivalente x=x/3
//4. Finalmente la MUESTRO en algun sitio
document.getElementById("mult").innerHTML = z;