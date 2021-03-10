# 출처: https://www.acmicpc.net/problem/1712
import sys
input = sys.stdin.readline

if __name__ == "__main__":
    a, b, c = list(map(int,input().rstrip().split()))
    if b >= c:
        print("-1")
    else:
        print(a // (c - b) + 1)
    
    # c * x > a + b * x
    # (c - b) * x - a > 0
    # (c - b) * x > a