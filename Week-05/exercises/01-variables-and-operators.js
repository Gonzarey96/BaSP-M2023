console.log("---EXERCISE 1: VARIABLES AND OPERATORS---");

/*a. Crear dos variables numericas y utilizar el operador suma para guardar el valor de la suma de ambos numneros
 en una 3er variable.*/

console.log("-exercise 1.a:")

var a = 4;
var b = 4;
var c = a + b;
console.log(c);

//b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.

console.log("-exercise 1.b:")

var str1 = "Argentina";
var str2 = "Francia";
var str3 = str1 + str2;

console.log(str3); 

/*c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del 
string) guardando el resultado de la suma en una 3er variable (utilizar length).*/

console.log("-exercise 1.c")

var rosario = "central";
var newells = "Old Boys";
var futbol = rosario.length + newells.length;

console.log(futbol);