# 출처: https://www.acmicpc.net/problem/1330
import sys

def comp(a,b):
    if a > b:
        print(">")
    elif a == b:
        print("==")
    else:
        print("<")

a,b = list(map(int, sys.stdin.readline().rstrip().split()))
comp(a,b)