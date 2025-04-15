//Feito por: Yan Almeida Mazzucatto e Giullia Souza Ladislau

const prompt = require("prompt-sync")();

// essa função recebe a quantidade de moedas (entre 2 e 5) do usuário, garantindo que a entrada seja válida
const entradaUsuario = () => {
    let qtd = parseInt(prompt("Digite a quantidade de moedas (2 a 5): "));
    while (isNaN(qtd) || qtd < 2 || qtd > 5) {
        qtd = parseInt(prompt("Valor inválido. Por favor, digite um número entre 2 e 5: "));
    }
    return qtd;
};

// essa função gera uma moeda aleatória, retornando 0 para 'cara' e 1 para 'coroa'
const geraMoedas = () => Math.random() <= 0.5 ? 0 : 1;

// essa função gera a jogada inicial que o simulador deve tentar acertar; utiliza a função geraMoedas para compor o array
const geraJogadaInicial = (qtd) => {
    let jogada = [];
    for (let i = 0; i < qtd; i++) {
        jogada.push(geraMoedas());
    }
    return jogada;
};

// nova função: permite ao usuário digitar manualmente a jogada inicial, se desejar
const entradaJogadaManual = (qtd) => {
    let jogada = [];
    console.log("Digite sua jogada inicial (0 para Cara, 1 para Coroa):");
    for (let i = 0; i < qtd; i++) {
        let valor = parseInt(prompt(`Moeda ${i + 1}: `));
        while (valor !== 0 && valor !== 1) {
            valor = parseInt(prompt(`Valor inválido. Digite 0 para Cara ou 1 para Coroa na moeda ${i + 1}: `));
        }
        jogada.push(valor);
    }
    return jogada;
};

// essa função gera uma jogada para cada tentativa do simulador
// a lógica é a mesma da jogada inicial, pois a geração é feita de forma aleatória
const geraJogadaGeral = (qtd) => {
    let jogada = [];
    for (let i = 0; i < qtd; i++) {
        jogada.push(geraMoedas());
    }
    return jogada;
};

// essa função compara duas jogadas (arrays) e retorna true se todas as posições forem iguais
const comparaJogadas = (jogada1, jogada2) => {
    if (jogada1.length !== jogada2.length) return false;
    for (let i = 0; i < jogada1.length; i++) {
        if (jogada1[i] !== jogada2[i]) return false;
    }
    return true;
};

// essa função evita que o simulador gere uma jogada repetida
// compara a nova jogada com uma jogada anterior e retorna true se forem diferentes
const evitarJogadaRepetida = (nova, anterior) => JSON.stringify(nova) !== JSON.stringify(anterior);

// essa função exibe todas as tentativas do simulador de forma organizada
const publicaResultado = (tentativas) => {
    console.log("\nSequências geradas:");
    for (let i = 0; i < tentativas.length; i++) {
        console.log(`Tentativa ${i + 1}: ${tentativas[i].map(n => n === 0 ? "Cara" : "Coroa").join(", ")}`);
    }
};

// função principal que coordena o simulador, garantindo a validação dos parâmetros e o funcionamento correto
const simuladorJogaMoedas = () => {
    const qtd = entradaUsuario();
    if (isNaN(qtd) || qtd < 2 || qtd > 5) {
        console.log("Quantidade de moedas inválida. Encerrando o jogo.");
        return;
    }

    // pergunta se o usuário deseja definir a jogada inicial manualmente
    let usarManual = prompt("Deseja digitar a jogada inicial manualmente? (s/n): ").toLowerCase();
    let jogadaInicial = (usarManual === "s") ? entradaJogadaManual(qtd) : geraJogadaInicial(qtd);

    let limite = parseInt(prompt("Digite o número máximo de tentativas para o simulador acertar: "));
    while (isNaN(limite) || limite <= 0) {
        limite = parseInt(prompt("Valor inválido. Digite um número positivo: "));
    }

    let tentativas = [];
    let acertou = false;
    let repetidas = 0; // contador de jogadas repetidas

    while (tentativas.length < limite && !acertou) {
        const tentativaAtual = geraJogadaGeral(qtd);
        let repetida = false;

        for (let i = 0; i < tentativas.length; i++) {
            if (!evitarJogadaRepetida(tentativaAtual, tentativas[i])) {
                repetida = true;
                repetidas++; // conta a jogada repetida
                break;
            }
        }

        if (!repetida) {
            tentativas.push(tentativaAtual);
            if (comparaJogadas(tentativaAtual, jogadaInicial)) {
                acertou = true;
            }
        }
    }

    console.log("\nJogada inicial do simulador: " + jogadaInicial.map(n => n === 0 ? "Cara" : "Coroa").join(", "));
    publicaResultado(tentativas);

    if (acertou) {
        console.log(`\nO simulador acertou a jogada inicial em ${tentativas.length} tentativa(s)!`);
    } else {
        console.log("\nO simulador NÃO acertou a jogada inicial dentro do número máximo de tentativas.");
    }

    // mostra quantas jogadas foram repetidas no total
    console.log(`\nQuantidade de jogadas repetidas evitadas: ${repetidas}`);
};

// inicia o jogo
simuladorJogaMoedas();