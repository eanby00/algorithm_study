# 출처: https://www.acmicpc.net/problem/2562
import sys
input = sys.stdin.readline

if __name__ == "__main__":
    test_list = []
    for i in range(9):
        test_list.append([int(input()), i+1])
    test_list.sort(key = lambda test_list: test_list[0])
    print(test_list[-1][0])
    print(test_list[-1][1])
