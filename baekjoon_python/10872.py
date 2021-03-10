# 출처: https://www.acmicpc.net/problem/10872

import sys
input = sys.stdin.readline
def fact(n):
    if n == 0:
        return 1
    return fact(n-1) * n

if __name__ == "__main__":
    n = int(input())
    print(fact(n))