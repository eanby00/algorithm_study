# 출처: https://www.acmicpc.net/problem/4344

import sys
input = sys.stdin.readline

if __name__ == "__main__":
    for _ in range(int(input())):
        test_list = list(map(int, input().rstrip().split()))
        avg = sum(test_list[1:]) / (len(test_list)-1)
        cnt = 0
        
        for i in range(1, len(test_list)):
            if test_list[i] > avg:
                cnt += 1

        print("{0:.3f}".format(round(cnt/(len(test_list)-1)*100,3))+"%")