# 출처: https://www.acmicpc.net/problem/10818

import sys
input = sys.stdin.readline

if __name__ == "__main__":
    leng = int(input())
    test_list = list(map(int, input().rstrip().split()))
    test_list.sort()
    print(test_list[0], test_list[-1])