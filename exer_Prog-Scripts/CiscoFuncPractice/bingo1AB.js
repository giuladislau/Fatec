//Exercício 1A

let numbersA = [50, 10, 40, 30, 20];
let sortedA = numbersA.slice().sort((a, b) => a - b);
console.log(sortedA); // [10, 20, 30, 40, 50]

//Exercício 1B

let numbersB = [50, 10, 40, 30, 20];
let sortedB = numbersB.slice().sort((a, b) => b - a);
console.log(sortedB); // [50, 40, 30, 20, 10]
