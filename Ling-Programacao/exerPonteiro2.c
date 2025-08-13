#include <stdio.h>

int main(){
    int a=15, b=29, *c, *d;
    c = &a;
    d = c;
    c = &b;
    
    if(*d % 2 == 0)
        *d = *d - 10;
    else
        *c = 2 * (*c);
    printf("a = %d, b = %d\n", a, b);
}