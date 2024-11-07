#include <stdio.h>
#include <math.h>
 
int main(){
    double baseA, expoenteB, resultado;
 
    printf("Digite dois valores inteiros:\n");
    scanf("%lf %lf", &baseA, &expoenteB);
 
    resultado = pow(baseA, expoenteB);
 
    printf("O resultado é:\n%.2lf\n", resultado);
 
    return 0;
}