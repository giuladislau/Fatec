import java.util.Random;

public class SomaLinhasMatriz {
    
    // constantes para definir as dimensões da matriz
    private static final int NUMERO_LINHAS = 7;
    private static final int NUMERO_COLUNAS = 5;
    private static final int VALOR_MINIMO = 1;
    private static final int VALOR_MAXIMO = 100;
    
    public static void main(String[] args) {
        // criando a matriz com as dimensões especificadas
        int[][] matrizPrincipal = new int[NUMERO_LINHAS][NUMERO_COLUNAS];
        
        // preenchendo a matriz com números aleatórios
        preencherMatrizAleatoriamente(matrizPrincipal);
        
        // exibindo a matriz e calculando as somas das linhas
        exibirMatrizComSomaLinhas(matrizPrincipal);
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
     * metodo para exibir a matriz formatada com a soma de cada linha
     * @param matriz a matriz a ser exibida
     */
    private static void exibirMatrizComSomaLinhas(int[][] matriz) {
        System.out.println("matriz gerada (7x5) com numeros aleatorios entre 1 e 100:");
        System.out.println("========================================================");
        
        // percorrendo cada linha para exibição
        for (int indiceLinha = 0; indiceLinha < matriz.length; indiceLinha++) {
            int somaLinhaAtual = 0;
            
            // exibindo os elementos da linha atual
            System.out.print("linha " + (indiceLinha + 1) + ": ");
            for (int indiceColuna = 0; indiceColuna < matriz[indiceLinha].length; indiceColuna++) {
                int valorAtual = matriz[indiceLinha][indiceColuna];
                
                // formatando a exibicao para alinhar os numeros
                System.out.printf("%3d ", valorAtual);
                
                // somando o valor atual à soma da linha
                somaLinhaAtual += valorAtual;
            }
            
            // exibindo a soma da linha atual
            System.out.println(" | soma = " + somaLinhaAtual);
        }
        
        System.out.println("========================================================");
    }
}