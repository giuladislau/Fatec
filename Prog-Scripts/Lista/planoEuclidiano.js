const prompt = require("prompt-sync")();

// essa função solicita as coordenadas dos dois pontos e calcula a distância entre eles
// a fórmula utilizada é: distância = sqrt((w - x)² + (z - y)²)
const calcularDistancia = () => {
    // entrada do usuário para as coordenadas do ponto a = (x, y)
    let x = parseFloat(prompt("Digite a coordenada x do ponto a: "));
    let y = parseFloat(prompt("Digite a coordenada y do ponto a: "));
    
    // entrada do usuário para as coordenadas do ponto b = (w, z)
    let w = parseFloat(prompt("Digite a coordenada w do ponto b: "));
    let z = parseFloat(prompt("Digite a coordenada z do ponto b: "));
    
    // validação simples: se algum dos valores não for um número, emite mensagem de erro e encerra
    if (isNaN(x) || isNaN(y) || isNaN(w) || isNaN(z)) {
        console.log("Algum dos valores inseridos é inválido.");
        return;
    }
    
    // cálculo da distância com base na fórmula de distância euclidiana
    let distancia = Math.sqrt(Math.pow((w - x), 2) + Math.pow((z - y), 2));
    return distancia;
};

// chama a função calcularDistancia e exibe o resultado formatado com duas casas decimais
const resultado = calcularDistancia();
if (resultado !== undefined) {
    console.log("A distância entre os pontos é: " + resultado.toFixed(2));
}
