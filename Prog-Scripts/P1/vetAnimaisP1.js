let animais = ["camelo", "cavalo", "gata", "aguia", "onça", "pomba", "coruja", "mocho", "jacaré", "cobra"];

// a) Construir novo vetor inserindo "sabiá" e "bemtevi" no início
let animaisComNovos = ["sabiá", "bemtevi", ...animais];
console.log("Vetor com sabiá e bemtevi:", animaisComNovos);

// b) Novo vetor com apenas os répteis (vamos considerar jacaré e cobra como répteis)
let repteis = animais.filter(animal => animal === "jacaré" || animal === "cobra");
console.log("Vetor apenas com répteis:", repteis);

// c) Criar um vetor para cada item: animais_item
let animais_item = animais.map(animal => [animal]);
console.log("Vetor com subvetores:", animais_item);