# 출처: https://www.acmicpc.net/problem/10250

import sys
input = sys.stdin.readline

if __name__ == "__main__":
    for _ in range(int(input())):
        h, w, n = list(map(int, input().rstrip().split()))
        floor_cnt = str(n - n // h * h)
        if floor_cnt == "0": floor_cnt = str(h)

        i = 1
        while True:
            if n <= i * h:
                break
            i += 1
        room_cnt = str(i)
        
        
        if len(room_cnt) == 1: room_cnt = "0"+room_cnt
        print(floor_cnt+room_cnt)
        