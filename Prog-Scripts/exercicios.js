//aula 1 - exercício 1
let agenda_Tel =[
    {
        nome: "Giullia Ladislau",
        telefone: "(19)991742181",
        endereco: "rua Hum, n.7",
        CEP: "11.111-111",
        email: "giullia@fatec.sp.gov.br"
    },
    {
        nome:"Thiago Farias",
        telefone: "(21)994372633",
        endereco: "rua Dois, n.9",
        CEP: "22.2222-22",
        email: "tf@rj.ong"
    }
];

console.log(agenda_Tel);

agenda_Tel.push(

    {
        nome:"Maria Monteiro",
        telefone: "(48)994344633",
        endereco: "rua Sete, n.1",
        CEP: "22.3333-22",
        email: "mm@tz.ong"
    },
    {
        nome:"Vitor Silva",
        telefone: "(11)994344677",
        endereco: "rua Paulista, n.100",
        CEP: "13.4444-22",
        email: "vs@sz.ong"
    }
);
console.log("\nApós Adição:");
console.log(agenda_Tel);

agenda_Tel.splice(1, 1);

console.log("\nApós Remoção:");
console.log(agenda_Tel);


//aula 2 - exercicio 2
let musica =[
    {
        nome: "No One Knows",
        autor: "Homme",
        grupo: "Queens of the Stone Age",
        data: 2002,
        midiaDisponivel: "Spotify"
    },
    {
        nome: "Bohemian Rhapsody",
        autor: "Freddie Mercury",
        grupo: "Queen",
        data: 1975,
        midiaDisponivel: "Spotify"
    },
    {
        nome: "Baptized in Fear",
        autor: "Abel Tesfaye (The Weeknd)",
        grupo: "The Weeknd",
        data: 2025,
        midiaDisponivel: "Spotify"
    }
];
console.log("\nCadastro Inicial:");
musica.forEach(m => {
    console.log(`Nome: ${m.nome}\nAutor: ${m.autor}\nGrupo: ${m.grupo}\nData: ${m.data}\nMídia: ${m.midiaDisponivel}\n`);
});

musica.push(
    { 
        nome: "Borderline", 
        autor: "Kevin Parker",
        grupo: "Tame Impala", 
        data: 2020, 
        midiaDisponivel: "Spotify, Apple Music, YouTube, Vinil"
    },
    { 
        nome: "Come As You Are", 
        autor: "Kurt Cobain",
        grupo: "Nirvana", 
        data: 1991, 
        midiaDisponivel: "Spotify, Apple Music, YouTube, Vinil"
    }
);


console.log("\nCadastro Atualizado:");
musica.forEach(m => {
    console.log(`Nome: ${m.nome}\nAutor: ${m.autor}\nGrupo: ${m.grupo}\nData: ${m.data}\nMídia: ${m.midiaDisponivel}\n`);
});


console.log("\nMúsicas Separadas por Autor/Grupo:");
musica.forEach(m => {
    console.log(`${m.grupo} - ${m.autor}: ${m.nome} (${m.data})`);
});


let extraidos = [musica[0], musica[3]];
musica.splice(3, 1);  // Remove a música no índice 3
musica.splice(0, 1);  // Remove a música no índice 0


console.log("\nRegistros Extraídos:");
extraidos.forEach(m => {
    console.log(`Nome: ${m.nome}\nAutor: ${m.autor}\nGrupo: ${m.grupo}\nData: ${m.data}\nMídia: ${m.midiaDisponivel}\n`);
});


console.log("\nCadastro Final Atualizado:");
musica.forEach(m => {
    console.log(`Nome: ${m.nome}\nAutor: ${m.autor}\nGrupo: ${m.grupo}\nData: ${m.data}\nMídia: ${m.midiaDisponivel}\n`);
});


//exercício 3
let animais = [
    "mamífero1", "mamífero2", "mamífero3",
    "ave1", "ave2", "ave3",
    "réptil1", "réptil2", "réptil3",
    "dinossauro1", "dinossauro2", "dinossauro3"
  ];
  
  console.log("Vetor Original:", animais);
  

  let ultimos = animais.slice(-3);
  console.log("\nTrês últimos valores:", ultimos, "Tamanho:", ultimos.length);
  

  let primeiros = animais.slice(0, 3);
  console.log("\nTrês primeiros valores:", primeiros, "Tamanho:", primeiros.length);
  

  let doSegundoAteUltimo = animais.slice(1);
  console.log("\nValores do segundo até o último:", doSegundoAteUltimo, "Tamanho:", doSegundoAteUltimo.length);
  

  let mamiferos = animais.slice(0, 3);
  let aves = animais.slice(3, 6);
  let reptis = animais.slice(6, 9);
  let dinossauros = animais.slice(9, 12);
  

  console.log("\nMamíferos:", mamiferos, "Tamanho:", mamiferos.length);
  console.log("Aves:", aves, "Tamanho:", aves.length);
  console.log("Répteis:", reptis, "Tamanho:", reptis.length);
  console.log("Dinossauros:", dinossauros, "Tamanho:", dinossauros.length);
  

  mamiferos[0] = mamiferos[0] + " modificado";
  aves[0] = aves[0] + " modificado";
  reptis[0] = reptis[0] + " modificado";
  dinossauros[0] = dinossauros[0] + " modificado";
  

  console.log("\nApós modificação:");
  console.log("Mamíferos modificados:", mamiferos);
  console.log("Aves modificadas:", aves);
  console.log("Répteis modificados:", reptis);
  console.log("Dinossauros modificados:", dinossauros);
  