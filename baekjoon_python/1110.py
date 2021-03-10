# 출처: https://www.acmicpc.net/problem/1110

import sys
input = sys.stdin.readline

if __name__ == "__main__":
    num = input().rstrip()
    i = 0
    value = num
    while True:
        if len(value) == 1:
            value = "0"+value
        i += 1
        value = value[-1] + str(int(value[0])+ int(value[1]))[-1] 
        # print(f"{i}번째 value: {value}")
        if int(num) == int(value):
            print(i)
            break