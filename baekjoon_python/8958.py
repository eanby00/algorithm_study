# 출처: https://www.acmicpc.net/problem/8958

import sys
input = sys.stdin.readline

if __name__ == "__main__":
    test_case = int(input())
    for _ in range(test_case):
        test = input().rstrip()
        cnt = 0
        result = 0
        for i in test:
            if i == "O":
                cnt += 1
                result += cnt
            else:
                cnt = 0
        print(result)