# 출처: https://www.acmicpc.net/problem/10952

import sys
input = sys.stdin.readline

if __name__ == "__main__":
    while True:
        a, b = list(map(int, input().split()))
        if a == 0 or b == 0:
            break
        print(a+b)