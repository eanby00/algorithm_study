# 출처: https://www.acmicpc.net/problem/15552

import sys
input = sys.stdin.readline

if __name__ == "__main__":
    for _ in range(int(input())):
        a, b = list(map(int, input().split()))
        print(a+b)