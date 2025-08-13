const adicionar = (a, b) => Number.isInteger(a) && Number.isInteger(b) ? a + b : NaN;
const sub = (a, b) => Number.isInteger(a) && Number.isInteger(b) ? a - b : NaN;
const mult = (a, b) => Number.isInteger(a) && Number.isInteger(b) ? a * b : NaN;

//Testes
console.log(adicionar(12, 10)); // = 22
console.log(sub(12, 10));       // = 2
console.log(mult(10, 10.1));    // = NaN
console.log(mult(5, 3));        // = 15
console.log(adicionar(8.5, 2)); // = NaN
