# 출처: https://www.acmicpc.net/problem/1018
# 코드 출처: https://leedakyeong.tistory.com/entry/%EB%B0%B1%EC%A4%80-1018%EB%B2%88-%EC%B2%B4%EC%8A%A4%ED%8C%90-%EB%8B%A4%EC%8B%9C-%EC%B9%A0%ED%95%98%EA%B8%B0-in-python-%ED%8C%8C%EC%9D%B4%EC%8D%AC

import sys
input = sys.stdin.readline
def check_BW(ex):
    cnt1 = 0
    for i in range(8):
        for j in range(8):
            i_ = (0 if i in [0,2,4,6] else 1)
            j_ = (0 if j in [0,2,4,6] else 1)
            if (i_ == 0 and j_ == 0) or (i_ == 1 and j_ == 1):
                if ex[i][j] != "B":
                    cnt1 += 1
            if (i_ == 1 and j_ == 0) or (i_ == 0 and j_ == 1):
                if ex[i][j] != "W":
                    cnt1 += 1

    cnt2 = 0
    for i in range(8):
        for j in range(8):
            i_ = (0 if i in [0,2,4,6] else 1)
            j_ = (0 if j in [0,2,4,6] else 1)
            if (i_ == 0 and j_ == 0) or (i_ == 1 and j_ == 1):
                if ex[i][j] != "W":
                    cnt2 += 1
            if (i_ == 1 and j_ == 0) or (i_ == 0 and j_ == 1):
                if ex[i][j] != "B":
                    cnt2 += 1
    
    return min(cnt1, cnt2)
            
if __name__ == "__main__":
    N, M = list(map(int,input().rstrip().split()))
    test_list = []
    for i in range(N):
        test_list.append(input().rstrip())

    check = list()

    for i in range(N-8+1):
        for j in range(M-8+1):
            ex = [z[(0+j):(8+j)] for z in test_list[(0+i):(8+i)]]
            check.append(check_BW(ex))
    print(min(check))

