#include <stdio.h>

int main(){
    int d1, d2, d3, d4;

    printf("\nD1 D2 D3 D4\n");
    for(d1 = 1; d1 <= 60; d1++)
        for(d2 = d1 + 1; d2 <= 60; d2++)
            for(d3 = d2 + 1; d3 <= 60; d3++)
                for(d4 = d3 + 1; d4 <= 60; d4++)
                    printf("%d %d %d %d\n", d1, d2, d3, d4);
}