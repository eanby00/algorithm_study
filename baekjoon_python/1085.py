# 출처: https://www.acmicpc.net/problem/1085

import sys
input = sys.stdin.readline

if __name__ == "__main__":
    x, y, w, h = list(map(int, input().rstrip().split()))
    leng_up = h - y
    leng_down = y
    leng_right = w - x
    leng_left = x
    print(min(leng_down,leng_left,leng_right,leng_up))