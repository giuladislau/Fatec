public class DecimalParaBinario {
     public static void main(String[] args) {
        int numero = 13;
        Pilha<Integer> pilha = new Pilha<>();
        
        int temp = numero;
        while (temp > 0) {
            pilha.empilhar(temp % 2);
            temp = temp / 2;
        }
        
        System.out.print("Binário de " + numero + ": ");
        while (!pilha.isEmpty()) {
            System.out.print(pilha.desempilhar());
        }
        System.out.println();
    }
}
