const acao = (callback, a, b) => callback(a, b);

const adicionar = (a, b) => Number.isInteger(a) && Number.isInteger(b) ? a + b : NaN;
const sub = (a, b) => Number.isInteger(a) && Number.isInteger(b) ? a - b : NaN;
const mult = (a, b) => Number.isInteger(a) && Number.isInteger(b) ? a * b : NaN;

//Testes
console.log(acao(adicionar, 12, 10)); // = 22
console.log(acao(sub, 12, 10));       // = 2
console.log(acao(mult, 10, 10.1));    // = NaN
console.log(acao(mult, 5, 3));        // = 15
