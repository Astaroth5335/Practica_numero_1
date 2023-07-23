//funcion de suma 

let suma1 = sumar(5, 6);
let suma2 = sumar(8, 9)
let sumatotal = sumar(suma1, suma2);

console.log(sumatotal)

function sumar(num1, num2) {
let total = num1 + num2;
return total;
};

//funcion de resta con parametros de que el mayor vaya primero

let resta1 = restar(200, 40)
let resta2 = restar(500, 50)
let restatotal = restar(300, 50)

console.log(restatotal)

function restar (num1, num2) {
    if (num1 > num2){
    total = num1 - num2;
}
    else {
        total = num2 - num1
       
    }
    return total;
}


//funcion de multiplicar 

let multiplicacion1 = multiplicar(5, 7);
let multiplicacion2 = multiplicar(10, 4);
let multiplicaciontotal = multiplicar(multiplicacion1, multiplicacion2);

console.log(multiplicaciontotal)

function multiplicar(num1, num2) {
    total = num1 * num2;
    return total;
}

//funcion divir


let divicion1 = divicion(50, 2);
let divicion2 = divicion(300, 4);
let diviciontotal = divicion(divicion1, divicion2);

console.log(diviciontotal);

function divicion(num1, num2){
    if (num1 > num2){
        total = num1 / num2;
    } else {
        total = num2 / num1;
    }
    return total;
}