# 출처: https://www.acmicpc.net/problem/2884

import sys
input = sys.stdin.readline

if __name__ == "__main__":
    time, mi = list(map(int, input().split()))
    if mi >= 45:
        mi -= 45
    elif time == 0:
        mi += 15
        time = 23
    elif time > 0:
        mi += 15
        time -= 1
    print(time, mi)
