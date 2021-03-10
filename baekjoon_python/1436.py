# 출처: https://www.acmicpc.net/problem/1436
import sys
input = sys.stdin.readline


if __name__ == "__main__":
    test_list = []
    i = 666
    n = int(input())
    while True:
        if len(test_list) == n:
            break
        if "666" in str(i):
            test_list.append(i)
        i += 1


    print(test_list[-1])
