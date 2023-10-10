const numbers = document.getElementById('numbers');
const result = document.getElementById('result');

let number1 = prompt('Introdusca el primer numero');
while(isNaN(number1)){
        number1 = prompt('Por favor introdusca un numero valido');
}
    
let number2 = prompt('Introdusca el segundo numero');
while(isNaN(number2)){
    number2 = prompt('Por favor introdusca un numero valido');
}

let number3 = prompt('Introdusca el tercer numero');
while(isNaN(number3)){
    number3 = prompt('Por favor introdusca un numero valido');
}

numbers.textContent = `Los números introducidos son: ${number1}, ${number2}, y ${number3}`;

/* EJERCICIO */

if ()
