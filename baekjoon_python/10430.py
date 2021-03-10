# 출처: https://www.acmicpc.net/problem/10430
import sys
def col(a,b,c):
    print((a+b)%c)
    print(((a%c) + (b%c))%c)
    print((a*b)%c)
    print((a%c)*(b%c)%c)

a,b,c = list(map(int,sys.stdin.readline().rstrip().split()))
col(a,b,c)
