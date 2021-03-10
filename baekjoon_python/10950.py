# 출처: https://www.acmicpc.net/problem/10950

import sys
input = sys.stdin.readline

if __name__ == "__main__":
    for _ in range(int(input())):
        a, b = input().split()
        print(int(a)+int(b))