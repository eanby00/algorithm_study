# 출처: https://www.acmicpc.net/problem/2739

import sys
input = sys.stdin.readline

if __name__ == "__main__":
    n = int(input())
    for i in range(9):
        print(n,"*",i+1,"=",n*(i+1))