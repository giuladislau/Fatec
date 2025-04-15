const prompt = require("prompt-sync")();

// pede ao usuário que digite sua idade
const idade = parseInt(prompt("Digite sua idade: "));

// valida se a entrada é um número
if (isNaN(idade)) {
    console.log("Por favor, insira um número válido.");
} else if (idade < 18) {
    console.log("Você é menor que 18 anos.");
} else if (idade > 18) {
    console.log("Você é maior que 18 anos.");
} else {
    console.log("Você tem 18 anos.");
}