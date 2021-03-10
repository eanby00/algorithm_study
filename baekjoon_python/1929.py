# 출처: https://www.acmicpc.net/problem/1929

import sys
input = sys.stdin.readline
 
if __name__ == "__main__":
    M, N = list(map(int, input().rstrip().split()))

    test_list = [True] * (N+1)
    m = int(N ** 0.5)

    for i in range(2, m+1):
        if test_list[i]:
            for j in range(i+i,(N+1),i):
                test_list[j] = False
    if M > 1:
        print("\n".join([str(i) for i in range(M, N+1) if test_list[i] == True]))
    else:
        print("\n".join([str(i) for i in range(2, N+1) if test_list[i] == True]))