# 출처: https://www.acmicpc.net/problem/2675

import sys
input = sys.stdin.readline

if __name__ == "__main__":
    for _ in range(int(input())):
        R, S = input().rstrip().split()
        result = []
        for i in S:
            for _ in range(int(R)):
                result.append(i)
        print("".join(result))