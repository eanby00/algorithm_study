# 출처: https://www.acmicpc.net/problem/4948
# pypy의 경우에만 작동, python에서는 시간초과가 나타남

import sys
input = sys.stdin.readline
 
if __name__ == "__main__":
    test_list = [True] * (246913)
    m = int(246913 ** 0.5)
    test_list[0], test_list[1] = False, False

    for i in range(2, m+1):
        if test_list[i]:
            for j in range(i+i,246913,i):
                test_list[j] = False

    while True:
        cnt = 0
        N = int(input())
        if N == 0:
            break

        for idx, value in enumerate(test_list):
            if value and idx > N and idx <= 2*N:
                cnt += 1

        print(cnt)