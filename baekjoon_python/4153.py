# 출처: https://www.acmicpc.net/problem/4153

import sys
input = sys.stdin.readline

if __name__ == "__main__":
    while True:
        a, b, c = list(map(int, input().rstrip().split()))
        if a == 0 and b == 0 and c == 0:
            break
        test_list = [a,b,c]
        test_list.sort()
        if test_list[0] ** 2 + test_list[1] ** 2 == test_list[2] ** 2:
            print("right")
        else:
            print("wrong")