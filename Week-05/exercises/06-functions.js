console.log("----------------EXERCISE 6: FUNCTIONS----------------");

/*a. Crear una función suma que reciba dos valores numéricos y retorne el resultado.
Ejecutar la función y guardar el resultado en una variable, 
mostrando el valor de dicha variable en la consola del navegador. */

console.log("-exercise 6.a:");

var addition = function(a, b) {
    return a + b;
  }
  
  var result = addition(3, 5);

  console.log(result);

/*b. Copiar la función suma anterior y agregarle una validación para controlar si alguno de los parámetros
no es un número; de no ser un número, mostrar un alert aclarando que uno de los parámetros tiene error y 
retornar el valor NaN como resultado. */

console.log("-exercise 6.b:");

var addition = function(a, b) {
    if(typeof a !== "number" || typeof b !== "number"){
      alert("one of the parameters is not a number");
      return NaN;
    }
    return a + b;
  }
  
  var result = addition(3, "no is a number");

  console.log(result);

/*c. Crear una función “validateInteger” que reciba un número como parámetro y 
devuelva verdadero si es un número entero. */

console.log("-exercise 6.c:");

var validateInteger = function validateInteger(num) {
  return num % 1 == 0;
}
console.log(validateInteger(42)); 
console.log(validateInteger(3.14)); 
console.log(validateInteger("hello")); 

/*d. Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del ejercicio 6c.
y que valide que los números sean enteros. En caso que haya decimales mostrar un alert con el error y 
retornar el número convertido a entero (redondeado). */

console.log("-exercise 6.d:");

var additionTwo = function(a, b) {
  if(typeof a !== "number" || typeof b !== "number"){
      alert("one of the parameters is not a number");
      return NaN;
  }
  if(!validateInteger(a)){
      alert("one of numbers is real");
      return Math.round(a);
  }
  if(!validateInteger(b)){
    alert("one of numbers is real");
    return Math.round(b);
}
  return a + b;
}

/*e. Convertir la validación del ejercicio 6d) en una función separada y 
llamarla dentro de una nueva función probando que todo siga funcionando igual que en el apartado anterior. */

console.log("-exercise 6.e:");

var additionThree = function(a, b) {
  var optionVal = validate(a, b);
  if(optionVal === "Is not a number") {
    alert("one of the parameters is not a number");
    return NaN;
  }
  if(optionVal === "A is a real number") {
    alert("one of numbers is real");
    return Math.round(a);
  }
  if(optionVal === "B is a real number") {
    alert("one of numbers is real");
    return Math.round(b);
  }
  return a + b;
}

var validate = function(a, b) {
  if(typeof a !== "number" || typeof b !== "number") {
    return "Is not a number";
  }
  if(!validateInteger(a)){
    return "A is a real number";
  }
  if(!validateInteger(b)){
    return "B is a real number";
  }
}
console.log(additionThree(2,2.5));
console.log(additionThree(2,2));
console.log(additionThree(2,"f"));