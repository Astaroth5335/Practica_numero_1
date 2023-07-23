 let frutas = ["manzanas", 'peras', 'platanos', 'naranjas']

for (let i = 0; i < frutas.length; i++) {
    let element = frutas[i];

    console.log("el valor de element = "  + element)
} 

let contador = 0;

while (contador < frutas.length) {
    console.log("El contador es = " + contador)
    contador ++; 
} 

do {
    console.log('el contador es = ' + contador);
    contador++;
} while (contador <= 10); 



