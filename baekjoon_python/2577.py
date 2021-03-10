# 출처: https://www.acmicpc.net/problem/2577

import sys
input = sys.stdin.readline

if __name__ == "__main__":
    a = int(input())
    b = int(input())
    c = int(input())
    check_item = str(a*b*c)

    result_list = [0] * 10
    for i in check_item:
        result_list[int(i)] += 1
    
    for i in result_list:
        print(i)

