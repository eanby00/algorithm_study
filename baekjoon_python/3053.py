# 출처: https://www.acmicpc.net/problem/3053
import sys
import math
input = sys.stdin.readline

if __name__ == "__main__":
    r = int(input())
    print(r ** 2 * math.pi)
    print((2*r) ** 2 / 2)