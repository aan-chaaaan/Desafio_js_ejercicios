let celsius = prompt("Ingrese una temperatura en grados Celsius")

let kelvin = parseInt(celsius)  +  parseInt(273.15);
let fahr = parseInt(celsius)  *  (1.8)  +  (32);

document.write( celsius + " grados corresponden a " + kelvin + " grados kelvin y " + fahr + " grados fahrenheit ")