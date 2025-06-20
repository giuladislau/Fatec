const prompt = require("prompt-sync")();

function verificarTriangulo(){
    
    //pede os lados
    let lado1 = parseFloat(prompt("Informe o primeiro lado do triângulo: "));
    let lado2 = parseFloat(prompt("Informe o segundo lado do triângulo: "));
    let lado3 = parseFloat(prompt("Informe o terceiro lado do triângulo: "));

    //verifica se os valores são positivos
    if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0){
        console.log("Valor inválido.");
        return;
    }

    //verifica se é um triângulo válido 
    if(lado1 + lado2 > lado3 && lado2 + lado3 > lado1 && lado1 + lado3 > lado2){

        //verifica qual tipo de triângulo é
        if(lado1 === lado2 && lado2 === lado3){
            console.log("É um triângulo equilátero. Possui todos os lados iguais.");
        } else if(lado1 === lado2 || lado2 === lado3 || lado1 === lado3){
            console.log("É um triângulo isósceles. Possui dois lados iguais.");
        } else {
            console.log("É um triângulo escaleno. Possui os três lados diferentes.");
        }
    } else {
        console.log("Não é um triângulo.");
    }
}

verificarTriangulo();