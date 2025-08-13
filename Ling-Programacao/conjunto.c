#include <stdio.h>
#include <stdlib.h>

int* uniao(int v1[], int n1, int v2[], int n2, int* tamanhoResultado) {
    int *resultado;
    int tam = 0;
    int i, j;
    int* temp;

    resultado = malloc((n1 + n2) * sizeof(int));
    if (resultado == NULL) {
        perror("Erro ao alocar memória");
        exit(EXIT_FAILURE);
    }

    for (i = 0; i < n1; i++) {
        resultado[tam++] = v1[i];
    }

    for (i = 0; i < n2; i++) {
        int encontrado = 0;
        for (j = 0; j < tam; j++) {
            if (v2[i] == resultado[j]) {
                encontrado = 1;
                break;
            }
        }
        if (!encontrado) {
            resultado[tam++] = v2[i];
        }
    }

    temp = realloc(resultado, tam * sizeof(int));
    if (temp == NULL && tam > 0) {
        perror("Erro ao redimensionar memória");
        free(resultado);
        exit(EXIT_FAILURE);
    }

    resultado = temp;
    *tamanhoResultado = tam;
    return resultado;
}

void imprimirVetor(int v[], int n) {
    int i;
    printf("[");
    for (i = 0; i < n; i++) {
        printf("%d", v[i]);
        if (i < n - 1) printf(", ");
    }
    printf("]\n");
}

int main() {
    int v1[] = {1, 2, 3};
    int v2[] = {3, 4, 5};
    int tamanho, *resultado;

    resultado = uniao(v1, 3, v2, 3, &tamanho);
    imprimirVetor(resultado, tamanho);

    free(resultado);
    return 0;
}