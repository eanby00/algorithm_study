# 출처: https://www.acmicpc.net/problem/1001 

import sys

def minus(num):
    a, b = map(int, num.split())
    return a - b
num = sys.stdin.readline().rstrip()
print(minus(num))