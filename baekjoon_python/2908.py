# 출처: https://www.acmicpc.net/problem/2908

import sys
input = sys.stdin.readline

if __name__ == "__main__":
    a, b = input().rstrip().split()
    a = a[::-1]
    b = b[::-1]
    print(max(int(a),int(b)))