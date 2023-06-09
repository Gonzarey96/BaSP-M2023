console.log("----------------EXERCISE 3: ARRAYS----------------");

/*a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", 
"Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log). */

console.log("-exercise 3.a:");

var months = ["Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre", 
            "Octubre",
            "Noviembre",
            "Diciembre"];

console.log(months ["4"]);
console.log(months ["10"]);

/*b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort). */

console.log("-Exercise 3.b");

var months = ["Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre", 
            "Octubre",
            "Noviembre",
            "Diciembre"];

var monthsAlfa = months.sort();

console.log (monthsAlfa);

/*c. Agregar un elemento al principio y al final del array (utilizar unshift y push). */

console.log("-exercise 3.c:");

var months = ["Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre", 
            "Octubre",
            "Noviembre",
            "Diciembre"];

months.unshift(2023);
months.push(2024);

console.log(months);

/*d. Quitar un elemento del principio y del final del array (utilizar shift y pop). */

console.log("-exercise 3.d");

var months = ["Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre", 
            "Octubre",
            "Noviembre",
            "Diciembre"];

months.shift();
months.pop();

console.log(months);

/*e. Invertir el orden del array (utilizar reverse). */

console.log("-exercise 3.e");

var months = ["Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre"];
months.reverse();

console.log(months);

/*f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión -
 (utilizar join). */

console.log("-exercise 3.f");

var months = ["Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre", 
            "Octubre",
            "Noviembre",
            "Diciembre"];

var monthsStr = months.join("-");

console.log (monthsStr);

/*g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice). */

 console.log("-exercise 3.g");

var months = ["Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre", 
            "Octubre",
            "Noviembre",
            "Diciembre"];

var monthsShort = months.slice(4, 11);

console.log (monthsShort);