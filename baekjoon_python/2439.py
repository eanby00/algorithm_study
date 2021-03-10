# 출처: https://www.acmicpc.net/problem/2439

import sys
input = sys.stdin.readline

if __name__ == "__main__":
    n = int(input())
    for i in range(n):
        print(" "*(n-i-1) + "*" * (i+1))