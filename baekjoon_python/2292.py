# 출처: https://www.acmicpc.net/problem/2292
import sys
input = sys.stdin.readline

if __name__ == "__main__":
    num = int(input())
    cnt = 0
    prev = 0
    while True:
        # print("cnt:",cnt)
        if cnt == 0:
            prev = 1
            if num == 1:
                cnt += 1
                break
        else:
            prev += 6 * cnt
            if num <= prev:
                cnt += 1
                break
        cnt += 1
        # print("prev:",prev)

    print(cnt)
    # 1 -> 1 -> 1칸
    # 2~7 -> 2 -> 6칸
    # 8~19 -> 3 -> 12칸
    # 20~37 -> 4 -> 18칸
    # 38~61 -> 5 -> 24칸