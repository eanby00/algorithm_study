# 출처: https://www.acmicpc.net/problem/10996

import sys
input = sys.stdin.readline

if __name__ == "__main__":
    num = int(input())
    first_num = num - int((num)/2) 
    second_num = int((num)/2)
    for i in range(num):
        if second_num == 0:
            print("*")
        else:
            for j in range(first_num):
                print("* ",end="")
            print()
            for j in range(second_num):
                print(" *", end="")
            print()
        