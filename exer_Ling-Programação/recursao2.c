#include <stdio.h>
int aux = 0;

/* Implemente uma função recursiva que recebe um vetor de inteiros de tamanho 3 e retorna o maior elemento. */

int verificador(int v[], int i, int aux){
if (i < 6){

if(v[i]>v[i++]){
    aux = v[i];
    return verificador(v, i++, aux);
} 

else{
    aux = v[i++];
    i = i+1;
    return verificador(v, i++, aux);
        }

    }else{
        return aux;
    }
}

int main(){
int v[] = {3,5,8,9,12,2};
int i = 0;

aux = verificador(v, i, aux);
    printf("\n%i\n", aux);

}