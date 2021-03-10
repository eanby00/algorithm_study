# 출처: https://www.acmicpc.net/problem/10039
import sys
input = sys.stdin.readline

if __name__ == "__main__":
    avg = 0
    for _ in range(5):
        score = int(input().rstrip())
        if score < 40:
            score = 40
        avg += score
    avg = avg // 5
    print(avg)