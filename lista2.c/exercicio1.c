#include <stdio.h>
 
int main(){
    int opcao = 0;
 
    while (opcao != 5){
       
        printf("\nEscolha uma opcao:\n");
        printf("1. Prato 1\n");
        printf("2 Prato 2\n");
        printf("3. Prato 3\n");
        printf("4.Prato 4\n");
        printf("5. Sair\n");
       
        scanf("%d", &opcao);
       
        switch (opcao){
            case 1:
                printf("\nVoce escolheu o prato 1.\n");
            break;
 
            case 2:
                printf("\nVoce escolheu o prato 2.\n");
            break;
 
            case 3:
                printf("\nVoce escolheu o prato 3.\n");
            break;
 
            case 4:
                printf("\nVoce escolheu o prato 4.\n");
            break;
 
            case 5:
                printf("\nSaindo do programa...\n");
            break;
 
            default:
                printf("Opcao inválida. Tente novamente.");
                break;
        }
 
    }
    return 0;
}