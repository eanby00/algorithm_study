# 출처: https://www.acmicpc.net/problem/2523

import sys
input = sys.stdin.readline

if __name__ == "__main__":
    num = int(input())
    for i in range(num):
        print("*" * (i+1))
    for i in range(num-1,-1,-1):
        print("*" * i)