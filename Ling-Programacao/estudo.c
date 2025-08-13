#include <stdio.h>

int fun1(int a, int b);  // Declaração da função
int j = 1;               // Variável global j inicializada com 1

int main(){
    int i, j;            // j local (esconde o j global dentro do main)
    int a = 4;           // Último dígito do RA — a = 4

    if(a % 2 == 0){      // 4 é par, então:
        a = 2;           // a recebe 2
    } else {
        a = 3;
        printf("%d\n", fun1(2,4));
    }

    for(i = 1; i < 3; i++){            // i = 1, 2
        for(j = 1; j < 3; j++){        // j = 1, 2
            printf("%d\n", fun1(a, i + j));
        }
    }   
}
int fun1(int a, int b){
    int i, p = 1;
    for(i = 1; i <= b; i++)
        p = p * a;
    
    return p + j;  // j aqui é a variável **global**, ou seja, vale 1
}