// essa função recebe um vetor e retorna uma nova versão em ordem crescente
function ordenarVetor(vetor) {
    // usamos sort com função de comparação para ordenar corretamente os números
    return [...vetor].sort((a, b) => a - b);
}

// essa função calcula a média aritmética dos valores de um vetor
function calcularMedia(vetor) {
    let soma = 0;

    // aqui somamos todos os elementos do vetor
    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i];
    }

    // dividimos pela quantidade de elementos para obter a média
    return soma / vetor.length;
}

// essa função retorna o maior número presente em um vetor
function maiorNumero(vetor) {
    let maior = vetor[0];

    // percorremos o vetor comparando cada valor com o maior atual
    for (let i = 1; i < vetor.length; i++) {
        if (vetor[i] > maior) {
            maior = vetor[i];
        }
    }

    return maior;
}

// vetores fornecidos no enunciado
const v1 = [12, 17, 23, 45, 13, 89, 47, 24, 32, 48];
const v2 = [34, 56, 12, 78, 36, 99, 2, 6, 8, 5];

// chamando as funções para os dois vetores
const v1Ordenado = ordenarVetor(v1);
const v2Ordenado = ordenarVetor(v2);

const mediaV1 = calcularMedia(v1);
const mediaV2 = calcularMedia(v2);

const maiorV1 = maiorNumero(v1);
const maiorV2 = maiorNumero(v2);

// mostrando os resultados na tela
console.log("Vetor v1 ordenado: " + v1Ordenado.join(", "));
console.log("Média do vetor v1: " + mediaV1.toFixed(2));
console.log("Maior número do vetor v1: " + maiorV1);

console.log("\nVetor v2 ordenado: " + v2Ordenado.join(", "));
console.log("Média do vetor v2: " + mediaV2.toFixed(2));
console.log("Maior número do vetor v2: " + maiorV2);