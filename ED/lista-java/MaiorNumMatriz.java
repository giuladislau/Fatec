import java.util.Random;

public class MaiorNumMatriz {
    
    // constantes para definir as dimensões da matriz
    private static final int NUMERO_LINHAS = 4;
    private static final int NUMERO_COLUNAS = 3;
    private static final int VALOR_MINIMO = 1;
    private static final int VALOR_MAXIMO = 100;
    
    public static void main(String[] args) {
        // criando a matriz com as dimensões especificadas
        int[][] matrizB = new int[NUMERO_LINHAS][NUMERO_COLUNAS];
        
        // preenchendo a matriz com números aleatórios
        preencherMatrizAleatoriamente(matrizB);
        
        // exibindo a matriz gerada
        exibirMatriz(matrizB);
        
        // encontrando e exibindo o maior elemento e sua posição
        encontrarEExibirMaiorElemento(matrizB);
    }
    
    /**
     * metodo para preencher a matriz com numeros aleatorios entre 1 e 100
     * @param matriz a matriz a ser preenchida
     */
    private static void preencherMatrizAleatoriamente(int[][] matriz) {
        Random geradorNumeros = new Random();
        
        // percorrendo cada linha da matriz
        for (int indiceLinha = 0; indiceLinha < matriz.length; indiceLinha++) {
            // percorrendo cada coluna da linha atual
            for (int indiceColuna = 0; indiceColuna < matriz[indiceLinha].length; indiceColuna++) {
                // gerando numero aleatorio entre 1 e 100 (inclusive)
                matriz[indiceLinha][indiceColuna] = geradorNumeros.nextInt(VALOR_MAXIMO) + VALOR_MINIMO;
            }
        }
    }
    
    /**
     * metodo para exibir a matriz formatada
     * @param matriz a matriz a ser exibida
     */
    private static void exibirMatriz(int[][] matriz) {
        System.out.println("matriz b gerada (4x3) com numeros aleatorios entre 1 e 100:");
        System.out.println("=======================================================");
        
        // exibindo cabeçalho das colunas
        System.out.print("       ");
        for (int indiceColuna = 0; indiceColuna < NUMERO_COLUNAS; indiceColuna++) {
            System.out.printf("col%d ", indiceColuna + 1);
        }
        System.out.println();
        
        // percorrendo cada linha para exibição
        for (int indiceLinha = 0; indiceLinha < matriz.length; indiceLinha++) {
            // exibindo o número da linha
            System.out.printf("linha%d: ", indiceLinha + 1);
            
            // exibindo os elementos da linha atual
            for (int indiceColuna = 0; indiceColuna < matriz[indiceLinha].length; indiceColuna++) {
                System.out.printf("%3d ", matriz[indiceLinha][indiceColuna]);
            }
            System.out.println();
        }
        
        System.out.println("=======================================================");
    }
    
    /**
     * metodo para encontrar o maior elemento da matriz e sua posição
     * @param matriz a matriz onde buscar o maior elemento
     */
    private static void encontrarEExibirMaiorElemento(int[][] matriz) {
        // inicializando com o primeiro elemento da matriz
        int maiorValor = matriz[0][0];
        int linhaMaiorValor = 0;
        int colunaMaiorValor = 0;
        
        // percorrendo toda a matriz para encontrar o maior valor
        for (int indiceLinha = 0; indiceLinha < matriz.length; indiceLinha++) {
            for (int indiceColuna = 0; indiceColuna < matriz[indiceLinha].length; indiceColuna++) {
                int valorAtual = matriz[indiceLinha][indiceColuna];
                
                // verificando se o valor atual é maior que o maior encontrado até agora
                if (valorAtual > maiorValor) {
                    maiorValor = valorAtual;
                    linhaMaiorValor = indiceLinha;
                    colunaMaiorValor = indiceColuna;
                }
            }
        }
        
        // exibindo o resultado encontrado
        System.out.println("informacoes sobre o maior elemento:");
        System.out.println("maior valor encontrado: " + maiorValor);
        System.out.println("posicao na matriz:");
        System.out.println("  - linha: " + (linhaMaiorValor + 1));
        System.out.println("  - coluna: " + (colunaMaiorValor + 1));
        System.out.println("  - indices do array [" + linhaMaiorValor + "][" + colunaMaiorValor + "]");
    }
}