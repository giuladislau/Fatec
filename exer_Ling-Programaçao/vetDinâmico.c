#include <stdio.h>
#include <stdlib.h>

// Cria vetor com tamanho inicial 4
// Devolve o endereço do vetor criado e inicializa size e maxSize
int *initVet(int *size, int *maxSize) {
    int *v = malloc(4 * sizeof(int));
    if (v == NULL) {
        perror("Erro ao alocar vetor");
        exit(EXIT_FAILURE);
    }
    *size = 0;
    *maxSize = 4;
    return v;
}

// Imprime o vetor
void printVet(int *v, int size, int maxSize) {
    int i;
    printf("Vetor de tamanho %d (max alocado %d): ", size, maxSize);
    for (i = 0; i < size; i++) {
        printf("%d", v[i]);
        if (i < size - 1) printf(", ");
    }
    printf("\n");
}

// Adiciona elemento ao vetor, realocando se necessário
int *addVet(int *v, int *size, int *maxSize, int e) {
    if (*size < *maxSize) { // Ainda tem espaço
        v[*size] = e;
        (*size)++;
        return v;
    } else { // Precisa realocar
        int novoMax = 2 * (*maxSize);
        int *vaux = realloc(v, novoMax * sizeof(int));
        if (vaux == NULL) {
            perror("Erro ao realocar vetor");
            return v; // Mantém o vetor antigo intacto para evitar perda
        }

        vaux[*size] = e;
        (*size)++;
        *maxSize = novoMax;

        return vaux;
    }
}

// Verifica se o elemento e está no vetor (retorna 1 se encontrado, 0 se não)
int find(int *v, int size, int e) {
    for (int i = 0; i < size; i++) {
        if (v[i] == e) {
            return 1;
        }
    }
    return 0;
}

// Remove elemento e do vetor (retorna 1 se removeu, 0 se não encontrou)
int removeVet(int *v, int *size, int *maxSize, int e) {
    for (int i = 0; i < *size; i++) {
        if (v[i] == e) {
            // Move os elementos posteriores para a esquerda
            for (int j = i; j < *size - 1; j++) {
                v[j] = v[j + 1];
            }
            (*size)--;
            return 1;
        }
    }
    return 0;
}

//Exemplo de teste
int main() {
    int size, maxSize;
    int *vet = initVet(&size, &maxSize);

    vet = addVet(vet, &size, &maxSize, 10);
    vet = addVet(vet, &size, &maxSize, 20);
    vet = addVet(vet, &size, &maxSize, 30);
    vet = addVet(vet, &size, &maxSize, 40);
    vet = addVet(vet, &size, &maxSize, 50); // Aqui vai realocar

    printVet(vet, size, maxSize);

    printf("Remove 30: %d\n", removeVet(vet, &size, &maxSize, 30));
    printVet(vet, size, maxSize);

    printf("Find 20: %d\n", find(vet, size, 20));
    printf("Find 100: %d\n", find(vet, size, 100));

    free(vet);
    return 0;
}