#include <stdio.h>

//Função para calcular média e encontrar o elemento do índice mais próximo da média
double media(double vet[], int n, int *i){
    if(n < 0)
        return 0; //evita divisão por zero

    double soma = 0.0;
    for(int j = 0; j < n; j++){
        soma += vet[j]; //somar todos valores do vetor
    }
    double media = soma / n;

    int indMaisProx = 0;
    double menorDif = vet[0] - media;
    if(menorDif < 0) 
        menorDif = -menorDif;//transforma negativo em positivo

    for(int j = 1; j < n; j++){
        double dif = vet[j] - media;
        if(dif < 0) 
            dif = -dif; //transforma negativo em positivo
        
        if(dif < menorDif){
            menorDif = dif;
            indMaisProx = j;
        }
    }

    *i = indMaisProx; //Armazena o índice do valor mais prómixo da média no ponteiro
    return media; 
}

// Testando
int main(){
    int n;
    printf("Digite o tamanho do vetor:\n");
    scanf("%d", &n);

    if(n < 0){ //verifica se é válido
        printf("O tamanho do vetor deve ser maior do que zero.");
        return 1;
    }

    double vetor[n]; //p declarar o vetor com tamanho definido pelo usuário
    printf("Digite os %d números do vetor: \n", n);
    for(int j = 0; j < n; j++){
        scanf("%lf", &vetor[j]);
    }

    int indice;
    double resultado = media(vetor, n, &indice);

    printf("A Média é de: %.2lf \n", resultado);
    printf("Índice do elemento mais próximo da média: %d \n", indice);

    return 0;
}