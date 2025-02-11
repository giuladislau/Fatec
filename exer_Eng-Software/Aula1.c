#include <stdio.h> 
#include <limits.h>

    // Código feito para ler 1000 números e imprimir qual maior, usei a biblioteca <limits.h> para conseguir colocar
    //o INT_MIN que é o menor número inteiro possível, para ele conseguir imprimir o maior corretamente caso seja inse-
    //rido números negativos.

int main(){
    //Aqui nós declaramos nossas duas variáveis, uma delas com o menor valor possível com o "INT_MIN" 
    //para não dar erro se caso usarmos valores negativos. 
    int num, maior = INT_MIN;

    // Aqui printa para o usuário inserir os 1000 números.
    printf("Digite 1000 números:\n");

    //Aqui usamos um looping para que o usuário insira os 1000 números.
    for(int i = 0; i < 5; i++){
        scanf("%d", &num);
        
    //Aqui fazemos a verificação do maior número, na qual toda vez que aparecer um número maior que o anterior,
    //a variável "num" atribui esse valor a variável "maior".
        if(num > maior){
        maior = num;
        }
    }
    // Aqui vemos o maior número inserido pelo usuário.
    printf("O maior número é o: %d \n", maior);
        
    return 0;
}