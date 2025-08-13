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
    // obtém a quantidade de moedas e valida a entrada
    const qtd = entradaUsuario();
    if (isNaN(qtd) || qtd < 2 || qtd > 5) {
        console.log("Quantidade de moedas inválida. Encerrando o jogo.");
        return;
    }
    
    // gera a jogada inicial que o simulador tentará acertar
    const jogadaInicial = geraJogadaInicial(qtd);
    
    // solicita ao usuário o limite de tentativas que o simulador terá para acertar
    let limite = parseInt(prompt("Digite o número máximo de tentativas para o simulador acertar: "));
    while (isNaN(limite) || limite <= 0) {
        limite = parseInt(prompt("Valor inválido. Digite um número positivo: "));
    }
    
    // inicializa o array de tentativas e a flag que indica se acertou
    let tentativas = [];
    let acertou = false;
    
    // o simulador gera novas tentativas até alcançar o limite ou acertar a jogada inicial
    while (tentativas.length < limite && !acertou) {
        const tentativaAtual = geraJogadaGeral(qtd);
        let repetida = false;
        
        // verifica se a nova tentativa já foi realizada anteriormente, para evitar repetições
        for (let i = 0; i < tentativas.length; i++) {
            if (!evitarJogadaRepetida(tentativaAtual, tentativas[i])) {
                repetida = true;
                break;
            }
        }
        
        // se a tentativa não for repetida, ela é adicionada ao conjunto de tentativas
        if (!repetida) {
            tentativas.push(tentativaAtual);
            if (comparaJogadas(tentativaAtual, jogadaInicial)) {
                acertou = true;
            }
        }
    }
    
    // exibe a jogada inicial que o simulador procurava acertar
    console.log("\nJogada inicial do simulador: " + jogadaInicial.map(n => n === 0 ? "Cara" : "Coroa").join(", "));
    
    // publica todas as tentativas geradas pelo simulador
    publicaResultado(tentativas);
    
    // por fim, informa se o simulador acertou e em quantas tentativas
    if (acertou) {
        console.log(`\nO simulador acertou a jogada inicial em ${tentativas.length} tentativa(s)!`);
    } else {
        console.log("\nO simulador NÃO acertou a jogada inicial dentro do número máximo de tentativas.");
    }
};

// inicia o jogo
simuladorJogaMoedas();