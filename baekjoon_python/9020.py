# 출처: https://www.acmicpc.net/problem/9020

import sys
input = sys.stdin.readline

if __name__ == "__main__":
    lst = []
    test_list = [True] * (10001)
    m = int(10001 ** 0.5)
    test_list[0], test_list[1] = False, False

    for i in range(2, m+1):
        if test_list[i]:
            for j in range(i+i,10001,i):
                test_list[j] = False

    for _ in range(int(input())):
        result = []
        num = int(input())
        
        if test_list[num//2]:
            first = num//2
        else:
            for i in range(num//2, 1, -1):
                if test_list[i] and test_list[num - i]:
                    first = i
                    break

        second = num - first
        print(first, second)
        


