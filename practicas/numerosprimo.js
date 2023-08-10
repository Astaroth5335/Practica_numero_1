/* -------- Actividad 1: --------
*/

function esPrimo(num) {

    if (num <= 1) {
        return false;
    };

    for (let i = 2; i <= num / 2; i++) {
        if(num % i === 0){
            return false
        };
    };

    return true;
};


/* -------- Actividad 2: --------
*/

function numerosPrimosHastaEl(num) {
    let numerosPrimos = new Array;

    if (num <= 1) {
        return console.log('No existen numeros primos antes del numero ' + num);
    };

    for (let i = 2; i < num; i++) {
        if (esPrimo(i)) {
            numerosPrimos.push(i);
        }
    }
    
    return console.log(numerosPrimos);
}

numerosPrimosHastaEl(88);