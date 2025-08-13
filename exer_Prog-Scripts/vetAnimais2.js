let animais = ["gato", "cachorro", "pássaro", "camelo"];
console.log(animais[0]);
console.log(animais[2]);

animais.push("Leão");
animais.unshift("Galinha");
animais.pop();

console.log(animais);


console.log(animais.length);

console.log(animais.indexOf("cachorro"));

for(let animal of animais){
    console.log("Olá ", animal);
}
let busca = animais.filter(a => a === "cachorro");
console.log(busca);