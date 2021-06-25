
let num1 = prompt("ingrese un primer numero mayor que cero");
let num2 = prompt("ingrese un segundo numero (distinto del primero) mayor que cero");


let suma = parseInt(num1)  +  parseInt(num2);
let resta = parseInt(num1)  -  parseInt(num2);
let multiplicacion = parseInt(num1)  *  parseInt(num2);
let division = parseInt(num1)  /  parseInt(num2);
let modulo = parseInt(num1)  %  parseInt(num2);

document.write(" El resultado de la suma de " + num1 + " y " + num2 + " es: " + suma + ". <br>");

document.write(" El resultado de la resta de " + num1 + " y " + num2 + " es: " + resta + ". <br>");

document.write(" El resultado de la multiplicación de " + num1 + " y " + num2 + " es: " + multiplicacion + ". <br>");

document.write(" El resultado de la división de " + num1 + " y " + num2 + " es: " + division + ". <br>");

document.write(" El resultado de la modulacion de " + num1 + " y " + num2 + " es: " + modulo + ". <br>");



