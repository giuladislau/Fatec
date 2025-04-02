function adicionar(a, b){
    if(!Number.isInteger(a)||!Number.isInteger(b))return NaN;
    return a + b;
}

function sub(a, b){
    if(!Number.isInteger(a)||!Number.isInteger(b))return NaN;
    return a - b;
}

function mult(a, b){
    if(!Number.isInteger(a)||!Number.isInteger(b))return NaN;
    return a * b;
}

//Testes
console.log(adicionar(12, 10)); // = 22
console.log(sub(15, 5));        // = 10
console.log(mult(12, 10.1));    // = NaN
console.log(mult(6, 3));        // = 18
console.log(adicionar(8.5, 2)); // = NaN
