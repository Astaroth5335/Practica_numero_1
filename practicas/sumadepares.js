//* -------- Actividad 1: --------

function sumaNumerosPares(num) {
    let numeroPares = new Array;
    let sumaPares = 0;

    if (num <= 1) {
        return console.log('El numero ' + num + ' no tiene numeros pares anteriores')
    }

    for (let i = 2; i <= num; i++) {
        if (i % 2 === 0) {
            numeroPares.push(i);
            sumaPares += i;
        }
    }

    return numeroPares;
}


/* -------- Actividad 2: --------
*/

function sumaNumerosImpares(num) {
    let numeroImpares = new Array;
    let sumaImpares = 0;

    if (num <= 0) {
        return console.log('El numero ' + num + ' no tiene numeros impares anteriores')
    }

    for (let i = 1; i <= num; i++) {
        if (i % 2) {
            numeroImpares.push(i);
            sumaImpares += i;
        }
    }

    return numeroImpares;
}


/* -------- Actividad 3: --------
*/

function sumaNumeros(num) {

    let pares = sumaNumerosPares(num);
    let imPares = sumaNumerosImpares(num);

    let totalPar = 0;
    let totalImpar = 0;

    pares.forEach(par => {
        totalPar += par;
    });

    imPares.forEach(imPar => {
        totalImpar += imPar;
    });
    
    let sumaNumeros = totalPar + totalImpar;

    console.log('La suma de todos los numeros anteriores a ' + num + ' es: ' + sumaNumeros);
    console.log('Pares: [' + pares + '] y el total de la suma es: ' + totalPar);
    console.log('Impares: [' + imPares + '] y el total de la suma es: ' + totalImpar);
}