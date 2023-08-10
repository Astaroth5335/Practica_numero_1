function fibonacci(n) {

    let fibonacciArray = [0, 1];

    if (n < 1) {
        return console.log('Ingresa un numero mayor o igual a 1')
    } else if (n <= 2) {
        return console.log(fibonacciArray.slice(0, n));
    }

    for (let i = 2; i < n; i++) {
        const nextFibonacci = fibonacciArray[i - 1] + fibonacciArray[i - 2];
        fibonacciArray.push(nextFibonacci);
    }

    return console.log(fibonacciArray);    
}

fibonacci(10);