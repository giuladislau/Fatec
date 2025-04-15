const prompt = require("prompt-sync")();

// essa função verifica se um número é primo
function ehPrimo(n) {
    if (n < 2) return false;
    
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

// solicita o número ao usuário
let limite = parseInt(prompt("Digite um número inteiro: "));

// valida se é um número válido
if (isNaN(limite) || limite < 1) {
    console.log("Por favor, digite um número inteiro válido maior que 0.");
} else {
    let primos = [];

    for (let i = 2; i <= limite; i++) {
        if (ehPrimo(i)) {
            primos.push(i);
        }
    }

    console.log("Os números primos menores ou iguais a " + limite + ": " + primos.join(", "));
}
