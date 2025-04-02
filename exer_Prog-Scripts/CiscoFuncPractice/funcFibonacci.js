function fibonacci(n){
    if (n === 0){
        return 0; 
    } else if (n === 1){
        return 1; 
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

//Teste
console.log(fibonacci(4));  // = 3
console.log(fibonacci(7));  // = 13
console.log(fibonacci(10)); // = 55
