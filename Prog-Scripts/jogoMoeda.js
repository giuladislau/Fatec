//Feito por: Yan Almeida Mazzucatto e Giullia Souza Ladislau

const prompt = require("prompt-sync")();

// essa função gera uma jogada aleatória com a quantidade de moedas escolhida pelo jogador
// usamos 0 para cara e 1 para coroa
function geraJogada(qtd) {
    let jogada = [];
    for (let i = 0; i < qtd; i++) {
        jogada.push(Math.random() <= 0.5 ? 0 : 1);
    }
    return jogada;
}

// essa função compara duas jogadas e retorna true se forem exatamente iguais
function comparaJogadas(jogada1, jogada2) {
    for (let i = 0; i < jogada1.length; i++) {
        if (jogada1[i] !== jogada2[i]) {
            return false;
        }
    }
    return true;
}

// essa função serve para mostrar a jogada de forma legível, trocando 0 por "Cara" e 1 por "Coroa"
function formataJogada(jogada) {
    return jogada.map(lado => (lado === 0 ? "Cara" : "Coroa")).join(", ");
}

// essa é a função principal que controla todo o jogo
function simuladorMoeda() {
    // o jogador escolhe a quantidade de moedas entre 2 e 5
    let qtd = parseInt(prompt("Digite a quantidade de moedas (2 a 5): "));
    while (isNaN(qtd) || qtd < 2 || qtd > 5) {
        qtd = parseInt(prompt("Valor inválido. Por favor, digite um número entre 2 e 5: "));
    }

    // aqui o programa gera a jogada inicial, que o simulador vai tentar acertar
    const jogadaInicial = geraJogada(qtd);

    // o jogador também define quantas tentativas o simulador pode fazer
    let limite = parseInt(prompt("Digite o número máximo de tentativas para o simulador acertar: "));
    while (isNaN(limite) || limite <= 0) {
        limite = parseInt(prompt("Valor inválido. Digite um número positivo: "));
    }

    // essas variáveis armazenam as tentativas e verificam se o simulador acertou
    let tentativas = [];
    let acertou = false;

    // aqui o simulador começa a tentar adivinhar a jogada inicial sem repetir tentativas
    while (tentativas.length < limite && !acertou) {
        let tentativaAtual = geraJogada(qtd);
        let repetida = false;

        for (let i = 0; i < tentativas.length; i++) {
            if (comparaJogadas(tentativas[i], tentativaAtual)) {
                repetida = true;
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

    // mostra a jogada alvo que o simulador precisava acertar
    console.log("\nJOGADA INICIAL DO SIMULADOR: " + formataJogada(jogadaInicial));

    // mostra todas as tentativas feitas pelo simulador
    console.log("\nSequências geradas:");
    for (let i = 0; i < tentativas.length; i++) {
        console.log(`Tentativa ${i + 1}: ${formataJogada(tentativas[i])}`);
    }

    // por último, informa se o simulador conseguiu acertar e em quantas tentativas
    if (acertou) {
        console.log(`\nO simulador acertou a jogada inicial em ${tentativas.length} tentativa(s)!`);
    } else {
        console.log("\nO simulador NÃO acertou a jogada inicial dentro do número máximo de tentativas.");
    }
}

// aqui o jogo é iniciado
simuladorMoeda();