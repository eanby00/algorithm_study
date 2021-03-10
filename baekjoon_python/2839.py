# 출처: https://www.acmicpc.net/problem/2839

import sys
input = sys.stdin.readline

if __name__ == "__main__":
    num = int(input())
    cnt = 0
    start = int(num/5)
    while True:
        if start < 0:
            cnt = -1
            break
        if start * 5 == num:
            cnt = start
            break
        elif (num - start * 5) % 3 == 0:
            cnt = start + (num - start * 5) // 3
            break
        start -= 1

    print(cnt)
    

