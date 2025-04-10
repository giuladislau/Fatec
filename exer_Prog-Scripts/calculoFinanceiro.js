const prompt = require("prompt-sync")();

// essa função calcula o valor com base na fórmula:
// calculo = (inicial * i) / (1 - Math.pow(1 + i, -n))
// ela recebe os valores digitados pelo usuário e retorna o resultado
const calcularValor = () => {
    // solicita o valor inicial e valida se é um número maior que zero
    let inicial = parseFloat(prompt("digite o valor inicial: "));
    while (isNaN(inicial) || inicial <= 0) {
        inicial = parseFloat(prompt("valor inválido. digite o valor inicial (maior que zero): "));
    }
    
    // solicita o juros mensal e valida se é um número maior que zero
    let i = parseFloat(prompt("digite o juros mensal (em decimal, ex: 0.05 para 5%): "));
    while (isNaN(i) || i <= 0) {
        i = parseFloat(prompt("valor inválido. digite o juros mensal (ex: 0.05 para 5%): "));
    }
    
    // solicita o número de meses e valida se é um número maior que zero
    let n = parseFloat(prompt("digite o número de meses: "));
    while (isNaN(n) || n <= 0) {
        n = parseFloat(prompt("valor inválido. digite o número de meses (maior que zero): "));
    }
    
    // realiza o cálculo conforme a fórmula dada
    const calculo = (inicial * i) / (1 - Math.pow(1 + i, -n));
    
    return calculo;
};

// chama a função e exibe o resultado com duas casas decimais
const resultado = calcularValor();
console.log(`o valor calculado é: ${resultado.toFixed(2)}`);