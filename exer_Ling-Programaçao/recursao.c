#include <stdio.h>
// Implemente uma função recursiva que recebe um número 
// inteiro positivo n e retorna a soma de todos os números inteiros de 1 até n.

int somador(int n, int i){

if (i < n){
    i = i+1;
    printf("\n %i", i );
    return somador(n,i);
} else{
    return i;
}
}

int main(){

int n = 0;
int i = 0;
printf("digita: ");
scanf("%i", &n);

somador(n, i);

}