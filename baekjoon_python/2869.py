# 출처: https://www.acmicpc.net/problem/2869

import sys
input = sys.stdin.readline

if __name__ == "__main__":
    a, b, v = list(map(int, input().rstrip().split()))
    if (v-a) % (a-b) == 0:
        print((v-a) // (a-b) + 1)
    else:
        print((v-a) // (a-b) + 2)