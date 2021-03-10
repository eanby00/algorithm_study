# 출처: https://www.acmicpc.net/problem/2775

import sys
input = sys.stdin.readline
def find(k,n,apart):
    if apart[k][n-1]:
        return apart[k][n-1]
    else:
        sum = 0
        for i in range(n):
            if apart[k-1][i]:
                sum += apart[k-1][i]
            elif k-1 == 0:
                apart[k-1][i] = i+1
                sum += apart[k-1][i]
            else:
                sum += find(k-1,i+1,apart)
        apart[k][n-1] = sum
        return apart[k][n-1]

if __name__ == "__main__":
    apart = [[]]
    for _ in range(int(input())):
        k = int(input())
        n = int(input())
        # ---------- 미리 공간 배정 -----
        for i in range(k+1):
            if i < len(apart):
                for j in range(n-len(apart[i])):
                    apart[i].append(None)
            else:
                apart.append([None] * n)
        print(find(k,n,apart))