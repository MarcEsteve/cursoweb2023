//Declaro las variables
var x, y;

//Asignación de valor y el tipo se lo damos con el valor
x=8;//x le asigno el valor numérico 7
y=4;
x+=y; //Equivalente a: ( x = x + y )
//Acciones en nuestro HTML
document.getElementById("resulsuma").innerHTML = " x += 4 es equivalente a x = x + 4 (siendo x=8), entonces la X es: "+ x;
x-=y;//Equivalente a: ( x = x - y )
document.getElementById("resulresta").innerHTML = " x -= 4 es equivalente a x = x - 4 (siendo ahora x=12), entonces la X es: "+ x;
x*=y;//Equivalente a: ( x = x * y )
document.getElementById("resulmux").innerHTML = " x *= 4 es equivalente a x = x * 4 (siendo ahora x=8), entonces la X es: "+ x;
x/=y;//Equivalente a: ( x = x / y )
document.getElementById("resuldiv").innerHTML = " x /= 4 es equivalente a x = x / 4 (siendo ahora x=32), entonces la X es: "+ x;
x%=y;//Equivalente a: ( x = x % y )
document.getElementById("resulresto").innerHTML = " x %= 4 es equivalente a x = x % 4 (siendo ahora x=8), entonces la X es: "+ x;