# 출처: https://www.acmicpc.net/problem/2446

import sys
input = sys.stdin.readline

if __name__ == "__main__":
    num = int(input())
    for i in range(num,0,-1):
        print(" "*(num-i)+"*"*(2*i-1))
    for i in range(2, num+1,1):
        print(" "*(num-i)+"*"*(2*i-1))