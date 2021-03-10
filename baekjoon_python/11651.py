# 출처: https://www.acmicpc.net/problem/11651
import sys
input = sys.stdin.readline

if __name__ == "__main__":
    test_list = []
    for i in range(int(input())):
        test_list.append(list(map(int, input().rstrip().split())))

    test_list.sort(key=lambda test_list: test_list[0])
    test_list.sort(key=lambda test_list: test_list[1])

    for x, y in test_list:
        print(x,y)