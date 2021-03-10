# 출처: https://www.acmicpc.net/problem/10870
import sys
input = sys.stdin.readline

def fibo(n):
    if n == 1:
        return 1
    elif n == 0:
        return 0
    return fibo(n-2) + fibo(n-1)

if __name__ == "__main__":
    print(fibo(int(input())))