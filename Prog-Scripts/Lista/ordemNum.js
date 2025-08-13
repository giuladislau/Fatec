const prompt = require("prompt-sync")();

// cria um array vazio para armazenar os números
let numeros = [];

// solicita 5 números inteiros ao usuário
for (let i = 0; i < 5; i++) {
    let num = parseInt(prompt(`Digite o ${i + 1}º número inteiro: `));
    // valida se o valor digitado é realmente um número inteiro
    while (isNaN(num)) {
        num = parseInt(prompt(`Valor inválido. Digite o ${i + 1}º número inteiro: `));
    }
    numeros.push(num);
}

// cria uma cópia do array e ordena em ordem crescente usando sort com função de comparação
const ordemCrescente = [...numeros].sort((a, b) => a - b);

// cria a ordem decrescente invertendo a ordem crescente (ou usando sort com inversão, ambas as abordagens servem)
const ordemDecrescente = [...ordemCrescente].reverse();

// exibe o resultado com uma quebra de linha entre as saídas
console.log("Números em ordem crescente: " + ordemCrescente);
console.log("\nNúmeros em ordem decrescente: " + ordemDecrescente);
