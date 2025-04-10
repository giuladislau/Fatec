const prompt = require("prompt-sync")();

// essa função realiza operações básicas entre dois números com base na operação escolhida
const calculadoraSimples = () => {
    let num1 = parseFloat(prompt("Digite o primeiro número: "));
    let num2 = parseFloat(prompt("Digite o segundo número: "));
    let operacao = prompt("Digite a operação (+, -, *, /): ");

    // validação básica dos dados inseridos
    if (isNaN(num1) || isNaN(num2)) {
        console.log("Valores inválidos.");
        return;
    }

    let resultado;

    if (operacao === "+") {
        resultado = num1 + num2;
    } else if (operacao === "-") {
        resultado = num1 - num2;
    } else if (operacao === "*") {
        resultado = num1 * num2;
    } else if (operacao === "/") {
        if (num2 === 0) {
            console.log("Não é possível dividir por zero.");
            return;
        }
        resultado = num1 / num2;
    } else {
        console.log("Operação inválida.");
        return;
    }

    console.log(`Resultado: ${resultado}`);
};

calculadoraSimples();