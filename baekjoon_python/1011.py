# 출처: https://www.acmicpc.net/problem/1011

import sys
import math
input = sys.stdin.readline

if __name__ == "__main__":
    for _ in range(int(input())):
        start, end = list(map(int, input().rstrip().split()))
        length = end - start
        i = int(math.sqrt(length))

        # print("I:",i)
        # print("length - i ** 2:", length - i ** 2)
        if i ** 2 == length:
            print(2*i-1)
        elif length - i ** 2 <= i:
            print(2 * i)
        elif (length - i ** 2) / 2 <= i:
            print(2 * i + 1)