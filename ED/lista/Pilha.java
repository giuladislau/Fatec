import java.util.ArrayList;

class Pilha<T> {
    private ArrayList<T> elementos;
    
    public Pilha() {
        elementos = new ArrayList<>();
    }
    
    public void empilhar(T elemento) {
        elementos.add(elemento);
    }
    
    public T desempilhar() {
        if (isEmpty()) {
            return null;
        }
        return elementos.remove(elementos.size() - 1);
    }
    
    public boolean isEmpty() {
        return elementos.isEmpty();
    }
}