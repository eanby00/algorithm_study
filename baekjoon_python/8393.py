# 출처: https://www.acmicpc.net/problem/8393

import sys
input = sys.stdin.readline

if __name__ == "__main__":
    num = int(input())
    print(int(num * (num+1) / 2))