let verde = 200;
let roja = 40;

function suma(num1, num2){

    let total = (num1 + num2);
    console.log(total);
}

suma(verde, roja);
suma(roja, roja);
suma(verde, verde);

function restar(num1, num2){
    if (num1 > num2) {
        let total = (num1 - num2)
    console.log(total);
    } 
    else {
        let total = (num2 - num1)
        console.log(total);
    }
    
}

restar(verde, roja);
restar(roja, verde);

function multiplicacion(num1, num2) {
    let total = (num1 * num2)
    console.log(total);
}

multiplicacion(verde, roja);
multiplicacion(verde, verde);

function division(num1, num2) {
    if (num1 > num2) {
            let total = (num1 / num2)
    console.log(total);
}
    else {
        let total = (num2 / num1)
        console.log(total);
}
}

division(verde, roja);
division(roja, verde);