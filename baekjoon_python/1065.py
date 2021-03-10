# 출처: https://www.acmicpc.net/problem/1065

import sys
input = sys.stdin.readline

def check(n):
    cnt = 0
    for i in range(1,n+1):
        if len(str(i)) <= 2:
            cnt += 1
            continue
        else:
            start = 0
            ratio = 0
            check = True
            for j in range(len(str(i))):
                if j == 0:
                    start = int(str(i)[j])
                elif j == 1:
                    ratio = int(str(i)[j]) - start
                else:
                    if int(str(i)[j-1]) + ratio != int(str(i)[j]):
                        check = False
                        break
            if check:
                cnt += 1
    print(cnt)

check(int(input()))