// Write a C program to take one positive integer N as input and print all even numbers from 1 to N.

#include <stdio.h>

int main()
{

    int n;
    scanf("%d",&n);
    for(int i = 2; i <= n; i+=2)
    {
        printf("%d ",i);
    }
    return 0;
}



