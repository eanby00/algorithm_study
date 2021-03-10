# 출처: https://www.acmicpc.net/problem/10871

import sys
input = sys.stdin.readline

if __name__ == "__main__":
    n,x = list(map(int, input().split()))
    test = input().split()
    result = []
    for i in test:
        if x > int(i):
            result.append(i)

    print(" ".join(result))