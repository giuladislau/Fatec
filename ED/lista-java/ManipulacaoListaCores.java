import java.util.*;

public class ManipulacaoListaCores {
    
    public static void main(String[] args) {
        // arrays de cores conforme especificado
        String[] cores1 = {"preto", "amarelo", "verde", "azul", "violeta", "prata"};
        String[] cores2 = {"dourado", "branco", "marrom", "azul", "cinza", "prata"};
        
        // criando duas listas a partir dos arrays
        List<String> listaCores1 = new ArrayList<>(Arrays.asList(cores1));
        List<String> listaCores2 = new ArrayList<>(Arrays.asList(cores2));
        
        System.out.println("=== manipulacao de listas de cores ===\n");
        
        // exibindo as listas iniciais
        System.out.println("lista 1 inicial:");
        imprimirLista(listaCores1);
        System.out.println("lista 2 inicial:");
        imprimirLista(listaCores2);
        
        // concatenando a segunda lista na primeira
        System.out.println("\n--- concatenando lista 2 na lista 1 ---");
        listaCores1.addAll(listaCores2);
        
        // liberando memoria da segunda lista
        listaCores2.clear();
        listaCores2 = null; // removendo a referencia para facilitar garbage collection
        System.out.println("memoria da lista 2 liberada");
        
        // exibindo a lista concatenada
        System.out.println("\nlista 1 apos concatenacao:");
        imprimirLista(listaCores1);
        
        // convertendo todos os elementos para maiusculas
        System.out.println("\n--- convertendo para maiusculas ---");
        converterMaiusculas(listaCores1);
        imprimirLista(listaCores1);
        
        // ordenando em ordem alfabetica
        System.out.println("\n--- ordenando alfabeticamente ---");
        Collections.sort(listaCores1);
        imprimirLista(listaCores1);
        
        // excluindo elementos duplicados
        System.out.println("\n--- excluindo elementos duplicados ---");
        excluirItensDuplicados(listaCores1);
        System.out.println("elementos duplicados removidos");
        imprimirLista(listaCores1);
        
        // exibindo lista em ordem reversa
        System.out.println("\n--- lista em ordem reversa ---");
        imprimirListaReversa(listaCores1);
        
        System.out.println("\n=== processamento concluido ===");
    }
    
    /**
     * metodo para imprimir todos os elementos de uma lista
     * @param lista a lista a ser impressa
     */
    private static void imprimirLista(List<String> lista) {
        if (lista == null || lista.isEmpty()) {
            System.out.println("lista vazia ou nula");
            return;
        }
        
        System.out.println("elementos da lista (" + lista.size() + " itens):");
        for (int indice = 0; indice < lista.size(); indice++) {
            System.out.println("  " + (indice + 1) + ". " + lista.get(indice));
        }
    }
    
    /**
     * metodo para converter todos os elementos de uma lista para maiusculas
     * @param lista a lista cujos elementos serao convertidos
     */
    private static void converterMaiusculas(List<String> lista) {
        if (lista == null) {
            System.out.println("lista nula - nao e possivel converter");
            return;
        }
        
        // percorrendo todos os elementos da lista
        for (int indice = 0; indice < lista.size(); indice++) {
            String elementoAtual = lista.get(indice);
            if (elementoAtual != null) {
                // convertendo para maiuscula e substituindo na lista
                lista.set(indice, elementoAtual.toUpperCase());
            }
        }
    }
    
    /**
     * metodo para excluir elementos duplicados de uma lista
     * utiliza linkedhashset para manter a ordem de insercao
     * @param lista a lista da qual os duplicados serao removidos
     */
    private static void excluirItensDuplicados(List<String> lista) {
        if (lista == null) {
            System.out.println("lista nula - nao e possivel remover duplicados");
            return;
        }
        
        // usando linkedhashset para manter a ordem e remover duplicados
        Set<String> conjuntoSemDuplicados = new LinkedHashSet<>(lista);
        
        // limpando a lista original
        lista.clear();
        
        // adicionando elementos unicos de volta à lista
        lista.addAll(conjuntoSemDuplicados);
    }
    
    /**
     * metodo para imprimir todos os elementos de uma lista em ordem reversa
     * @param lista a lista a ser impressa em ordem reversa
     */
    private static void imprimirListaReversa(List<String> lista) {
        if (lista == null || lista.isEmpty()) {
            System.out.println("lista vazia ou nula");
            return;
        }
        
        System.out.println("elementos da lista em ordem reversa (" + lista.size() + " itens):");
        // percorrendo a lista do ultimo para o primeiro elemento
        for (int indice = lista.size() - 1; indice >= 0; indice--) {
            System.out.println("  " + (lista.size() - indice) + ". " + lista.get(indice));
        }
    }
}