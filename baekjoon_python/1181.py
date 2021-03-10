# 출처: https://www.acmicpc.net/problem/1181

import sys
input = sys.stdin.readline

if __name__ == "__main__":
    test_list = []
    for _ in range(int(input())):
        test_list.append(input().rstrip())

    test_list = list(set(test_list))

    result_list = []
    for i in test_list:
        result_list.append([i, len(i)])

    result_list.sort(key = lambda test_list: test_list[0])
    result_list.sort(key = lambda test_list: test_list[1])

    for i in result_list:
        print(i[0])
