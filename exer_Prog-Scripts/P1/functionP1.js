// a) Gerar aleatoriamente 10 sequências de 5 números entre 0 e 10
function gerarSequenciasAleatorias() {
    let sequencias = [];
    for (let i = 0; i < 10; i++) {
      let sequencia = [];
      for (let j = 0; j < 5; j++) {
        sequencia.push(Math.floor(Math.random() * 11)); // de 0 a 10
      }
      sequencias.push(sequencia);
    }
    return sequencias;
  }
  
  // b) Armazenar as 10 sequências num vetor
  let todasSequencias = gerarSequenciasAleatorias();
  
  // c) Calcular a multiplicação dos 5 elementos de cada sequência
  function calcularMultiplicacoes(sequencias) {
    return sequencias.map(seq => seq.reduce((acc, val) => acc * val, 1));
  }
  
  // d) Publicar a menor multiplicação e a sequência correspondente
  function mostrarMenorMultiplicacao(sequencias) {
    const multiplicacoes = calcularMultiplicacoes(sequencias);
    let menor = multiplicacoes[0];
    let indice = 0;
  
    for (let i = 1; i < multiplicacoes.length; i++) {
      if (multiplicacoes[i] < menor) {
        menor = multiplicacoes[i];
        indice = i;
      }
    }
  
    console.log("Menor multiplicação:", menor);
    console.log("Sequência correspondente:", sequencias[indice]);
  }
  
  mostrarMenorMultiplicacao(todasSequencias);  