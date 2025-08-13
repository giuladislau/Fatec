/*
const prompt = require("prompt-sync")();

function verifTriangulo (){
    let lado1 = parseFloat(prompt("Digite o primeiro lado: "));
    let lado2 = parseFloat(prompt("Digite o segundo lado: "));
    let lado3 = parseFloat(prompt("Digite o terceiro lado: "));

    if(lado1 + lado2 > lado3 && lado2 + lado3 > lado1 && lado1 + lado3 > lado2){
        console.log("\né um triÂngulo");
        if(lado1 === lado2 && lado2 === lado3){
            console.log("O triangulo é equilátero.");
        }else if(lado1 === lado2 || lado1 === lado3 || lado2 === lado3){
            console.log("É isósceles.");
        }else if(lado1 != lado2 && lado2 != lado3){
            console.log("é escaleno");
        }
    }else{
        console.log("não é um triangulo.");
    }
}

verifTriangulo();
*/

/*
const prompt = require("prompt-sync")();

let numeros = []

    for(i = 0; i < 5; i++){
        let num = parseInt(prompt("Digite os 5 valores: "));
        numeros.push(num);
    }

numeros.sort((a, b) => a - b);
console.log("Crescente: " + numeros);

numeros.sort((a, b) => b - a);
console.log("Decrescente: " + numeros);
*/

