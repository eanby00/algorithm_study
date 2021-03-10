# 출처: https://www.acmicpc.net/problem/1000
import sys

def sum(num):
    a, b = map(int, num.split())
    return a + b
num = sys.stdin.readline().rstrip()
print(sum(num))