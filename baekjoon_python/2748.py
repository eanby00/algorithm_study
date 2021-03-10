# 출처: https://www.acmicpc.net/problem/2748

import sys
input = sys.stdin.readline
def fibo(num):
    fibo_value = [None for i in range(num+1)]
    fibo_value[0] = 0
    fibo_value[1] = 1
    for i in range(2,len(fibo_value)):
        fibo_value[i] = fibo_value[i-1] + fibo_value[i-2]
    return fibo_value[-1]
if __name__ == "__main__":
    num = int(input())
    print(fibo(num))
