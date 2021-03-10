# 출처: https://www.acmicpc.net/problem/10809

import sys
input = sys.stdin.readline

if __name__ == "__main__":
    test_line = input().rstrip()
    result = [-1] * 26
    test_line = test_line.upper()
    for i in range(len(test_line)):
        if result[ord(test_line[i])-65] == -1:
            result[ord(test_line[i])-65] = i

    for i in result:
        print(i, end = " ")