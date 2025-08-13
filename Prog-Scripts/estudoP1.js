//Testando pequenos códigos para aplicar os conceitos que cairão na P1 de JS

/* Váriável básica e estruturação de dados
let nome = "Giullia";
let idade = 19;
let CNH = true;

console.log("Meu nome é " + nome);
console.log("Tenho " + idade + " anos");
console.log("Tenho CNH? " + (CNH ? "Sim" : "Não"));
*/

/* Condicional
const prompt = require("prompt-sync")();
const idade = parseInt(prompt("Digite sua idade: "));

if (idade > 18){
    console.log("Você é maior de idade.");
} else if (idade < 18){
    console.log("Você é menor de idade.");
} else {
    console.log("Você tem 18 anos, portanto, é de maior.")
}
*/

/* Loop
for(let i = 1; i <= 10; i++){
    console.log("Contando: " + (i));
}
*/

/* Função
//definindo prompt-sync
const prompt = require("prompt-sync")();

//criando função para multiplicar o item a pelo item b e retornando sua multiplicação
function multiplicar (a, b){
    return a * b;
}

//pedindo o valor de ambos os itens pelo prompt
const a = parseInt(prompt("Digite o valor de A: "));
const b = parseInt(prompt("Digite o valor de B: "));

//definindo a variável resultado para receber o retorno da função
const resultado = multiplicar(a, b) 

//printando o resultado
console.log("O resultado da multiplicação é: " + resultado);
*/

/* Array
let frutas = ["banana", "melancia", "morango"];

console.log("A fruta na segunda posição do array é: " + frutas[1]);
*/

/* Objetos
let carro = {
    marca: "BMW",
    modelo: "320i",
    ano: 2012
};

console.log("A marca do carro é " + carro.marca);
console.log("E o seu modelo é " + carro.modelo + " de " + carro.ano);
*/