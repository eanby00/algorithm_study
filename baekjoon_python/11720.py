# 출처: https://www.acmicpc.net/problem/11720

import sys
input = sys.stdin.readline

if __name__ == "__main__":
    leng = int(input())
    nums = input().rstrip()
    sum = 0
    for i in nums:
        sum += int(i)
    print(sum)
