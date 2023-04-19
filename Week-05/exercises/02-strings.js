console.log("-------------EXERCISE 2: STRINGS---------------");

/*a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto
en mayúscula (utilizar toUpperCase).*/

console.log("-Exercise 2.a:");

var sentence = "gonzaReybet";
var sentenceUpperCase = sentence.toUpperCase();

console.log(sentenceUpperCase);

/*b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

console.log("-Exercise 2.b");

var sentence = "argentinaChampion";
var subSentence = sentence.substring(0, 5);

console.log(subSentence);

/*c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con 
los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

console.log("-Exercise 2.c");

var sentence = "Radium support";
var subSentence = sentence.substring(sentence.length - 3);

console.log(subSentence);

/*d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra 
en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, 
toLowerCase y el operador +). */

console.log("-Exercise 2.d");

var sentence = "the one who does not jump is an Englishman";
var newSentence = sentence.substring(0,1).toUpperCase() + sentence.substring(1).toLowerCase();

console.log(newSentence);

/*e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar
la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf). */

console.log("-Exercise 2.e");

var sentence = "Rosario Central";
var indexrc = sentence.indexOf(" ");

console.log(indexrc);

/*  Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de
ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase,
toLowerCase y el operador +). */

console.log("-Exercise 2.f");

var sentence = "apartment dandelions";
var space = sentence.indexOf(" ");
var sentence2 = sentence.substring(0,1).toUpperCase();
var sentence3 = sentence.substring(1, space + 1).toLowerCase();  
var sentence4 = sentence.substring(space + 1, space + 2).toUpperCase();
var sentence5 = sentence.substring(space + 2).toLowerCase();

var finalSentence = sentence2 + sentence3 + " " + sentence4 + sentence5;

console.log(finalSentence);