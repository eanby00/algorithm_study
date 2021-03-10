# 출처: https://www.acmicpc.net/problem/2231
import sys
input = sys.stdin.readline

if __name__ == "__main__":
    num = int(input())
    
    if num > 54:
        check_point = num - 54
    else:
        check_point = 1

    while True:
        if check_point > num:
            print(0)
            break

        save = 0
        for i in str(check_point):
            save += int(i)

        if check_point + save == num:
            print(check_point)
            break

        check_point += 1