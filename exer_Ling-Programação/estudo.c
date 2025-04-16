#include <stdio.h>
int fun1(int a, int b);
int j=1;
int main(){
int i, j;
int a = 4;///Use o último dígito de seu RA.
    if(a % 2 == 0){
    a = 2;
    }else{
a = 3;
printf("%d\n", fun1(2,4));
    }for(i = 1; i<3; i++){
for(j= 1; j <3; j++){
printf("%d\n", fun1(a, i+j));
}
}
}
int fun1(int a, int b){
int i, p=1;
for(i=1; i<=b; i++)
p = p*a;
return p+j;
}