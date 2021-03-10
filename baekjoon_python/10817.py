# 출처: https://www.acmicpc.net/problem/10817

import sys
input = sys.stdin.readline

if __name__ == "__main__":
    values = list(map(int, input().rsplit()))
    values.sort()
    print(values[1])