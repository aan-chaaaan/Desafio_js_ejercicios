let num1 = prompt("Ingrese un primer numero");
let num2 = prompt("Ingrese un segundo numero");
let num3 = prompt("Ingrese un tercer numero");
let num4 = prompt("Ingrese un cuarto numero");
let num5 = prompt("Y un quinto numero");


let sumatoria = parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4) + parseInt(num5);

let promedio = sumatoria / 5;

document.write(" La suma de los numero ingresados es " + sumatoria + " y su promedio es " + promedio);