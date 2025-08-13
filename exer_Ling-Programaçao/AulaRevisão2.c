#include <stdio.h>

int main(){
    int a, b;
    int i, res = 1;

    printf("Digite dois valores inteiros positivos:\n");
        scanf("%d %d", &a, &b);

        for (i=1 ; i<=b ; i++){
            res *= a;
        }
    
    printf("O resultado é %d \n", res);
}