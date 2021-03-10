# 출처: https://www.acmicpc.net/problem/10951

import sys
input = sys.stdin.readline

if __name__ == "__main__":
    while True:
        try:
            a, b = list(map(int, input().split()))
            print(a+b)
        except:
            break