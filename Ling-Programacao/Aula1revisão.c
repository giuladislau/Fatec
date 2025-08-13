#include <stdio.h>
#include <ctype.h>

int main(){
char escolha;
int base, altura, resultado;

    printf("Escolha de qual polígono deseja calcular a área:\n Quadrado = A\n Triângulo = B\n Retângulo = C\n");
    scanf("%c", &escolha);
    getchar();

    escolha = toupper(escolha);

    if(escolha == 'A'){
        printf("Insira o valor da base do quadrado:\n");
        scanf("%d", &base);

        resultado = base * base;
        printf("A área do quadrado é: %d\n", resultado);
    }

    if(escolha == 'B'){
        printf("Insira o valor da base do retângulo:\n");
        scanf("%d", &base);

        printf("Insira o valor da altura do mesmo:\n");
        scanf("%d", &altura);

        resultado = base * altura;
        printf("A área do retângulo é: %d\n", resultado);
    }
    
    if(escolha == 'C'){
        printf("Insira o valor da base do triângulo:\n");
        scanf("%d", &base);

        printf("Insira o valor da altura do mesmo:\n");
        scanf("%d", &altura);

        resultado = base * altura / 2;
        printf("A área do triângulo é: %d\n", resultado);
    }
    return 0;
}