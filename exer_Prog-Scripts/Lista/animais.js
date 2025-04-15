// vetor original de animais
const C = ["canário", "gavião", "cachorra", "gata", "arara", "cavalo", "sabiá", "porco", "galo"];

// i) cria um novo vetor com dois répteis no final
let animaisComRepteis = [...C]; // faz uma cópia do vetor original
animaisComRepteis.push("jacaré");
animaisComRepteis.push("iguana");

console.log("i) Vetor com répteis adicionados:");
console.log(animaisComRepteis);

// ii) cria um novo vetor com os elementos do índice 2 ao 6 (inclusive o 2, exclusivo o 7)
let corteIndice2a6 = animaisComRepteis.slice(2, 7);

console.log("\nii) Vetor com elementos do índice 2 ao 6:");
console.log(corteIndice2a6);

// iii) cria um novo vetor contendo apenas animais de quatro patas
// aqui estamos escolhendo manualmente com base no conhecimento dos animais
let animais4Patas = [];

for (let i = 0; i < animaisComRepteis.length; i++) {
    let animal = animaisComRepteis[i];
    if (
        animal === "cachorra" ||
        animal === "gata" ||
        animal === "cavalo" ||
        animal === "porco" ||
        animal === "jacaré" ||
        animal === "iguana"
    ) {
        animais4Patas.push(animal);
    }
}

console.log("\niii) Vetor com animais de quatro patas:");
console.log(animais4Patas);

// iv) cria um novo vetor concatenando o vetor de 4 patas com o vetor de índice 2 ao 6
let vetorFinal = animais4Patas.concat(corteIndice2a6);

console.log("\niv) Vetor final (concatenação dos anteriores):");
console.log(vetorFinal);
