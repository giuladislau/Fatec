// inicialização dos vetores para cada condição
let v3 = [];
let v7 = [];
let v13 = [];
let v3e5 = [];

// percorre os números de 1 até 100
for (let num = 1; num <= 100; num++) {
    // se for divisível por 3, adiciona ao vetor v3
    if (num % 3 === 0) {
        v3.push(num);
    }
    
    // se for divisível por 7, adiciona ao vetor v7
    if (num % 7 === 0) {
        v7.push(num);
    }
    
    // se for divisível por 13, adiciona ao vetor v13
    if (num % 13 === 0) {
        v13.push(num);
    }
    
    // se for divisível por 3 e por 5, adiciona ao vetor v3e5
    if (num % 3 === 0 && num % 5 === 0) {
        v3e5.push(num);
    }
}

// exibe as saídas com os números separados por vírgula e quebras de linha
console.log("Números divisíveis por 3: " + v3.join(", "));
console.log("\nNúmeros divisíveis por 7: " + v7.join(", "));
console.log("\nNúmeros divisíveis por 13: " + v13.join(", "));
console.log("\nNúmeros divisíveis por 3 e 5: " + v3e5.join(", "));
