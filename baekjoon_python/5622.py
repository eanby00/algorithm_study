# 출처: https://www.acmicpc.net/problem/5622

import sys
input = sys.stdin.readline

if __name__ == "__main__":
    test_line = input().rstrip()
    result = 0
    for i in test_line:
        if i in "ABC":
            result += 3
        elif i in "DEF":
            result += 4
        elif i in "GHI":
            result += 5
        elif i in "JKL":
            result += 6
        elif i in "MNO":
            result += 7
        elif i in "PQRS":
            result += 8
        elif i in "TUV":
            result += 9
        elif i in "WXYZ":
            result += 10
    print(result)