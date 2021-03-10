# 출처: https://www.acmicpc.net/problem/11729
import sys
input = sys.stdin.readline


def move(n, start, end):
    global cnt
    cnt += 1
    global result
    result.append((start, end))
    
def hanoi(n, start, end, temp):
    if n > 0:
        hanoi(n-1, start, temp, end)
        move(n, start, end)
        hanoi(n-1, temp, end, start)

if __name__ == "__main__":
    cnt = 0
    result = []
    hanoi(int(input()), 1, 3, 2)
    print(cnt)
    for start,end in result:
        print(start,end)