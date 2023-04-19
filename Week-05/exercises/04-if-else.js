console.log("------------EXERCISE 4: IF-ELSE--------------");

/*a.Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5
mostrar una alerta con el mensaje “Greater than or equal to 0,5” y sino un alerta con el mensaje “Lower than 0,5”..*/

console.log("-Exercise 4.a:");

var numberRandom = Math.random();
if (numberRandom >= 0.5) {
    alert("Greater than or equal to 0,5");
} else {
    alert("Lower than 0,5");
}

console.log (numberRandom);

/*b.Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
“Bebe” si la edad es menor a 2 años;
“Niño” si la edad es entre 2 y 12 años;
“Adolescente” entre 13 y 19 años;
“Joven” entre 20 y 30 años;
“Adulto” entre 31 y 60 años;
“Adulto mayor” entre 61 y 75 años;
“Anciano” si es mayor a 75 años.
*/

console.log("-Exercise 4.b:");

var age = Math.round (Math.random()*100);
if (age <2) {
    alert("baby");
}else if (age >= 2 && age < 13) {
    alert("child");
}else if (age >= 13 && age < 20) {
    alert("teen");
}else if (age >= 20 && age < 31) {
    alert("young");
}else if (age >= 31 && age < 61) {
    alert("adult");
}else if (age >= 61 && age < 76) {
    alert("older adult");
}else {
    alert("old man");
}

console.log (age);