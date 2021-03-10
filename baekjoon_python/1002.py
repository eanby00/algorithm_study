# 출처: https://www.acmicpc.net/problem/1002
import sys
import math
input = sys.stdin.readline

if __name__ == "__main__":
    for _ in range(int(input())):
        x_1, y_1, r_1, x_2, y_2, r_2 = list(map(int, input().rstrip().split()))
        if x_1 == x_2 and y_1 == y_2: # 두 점의 좌표가 동일할 때 
            if r_1 == r_2:
                print(-1)
            else:
                print(0)
        else:

            if (x_2 - x_1) ** 2 + (y_2 - y_1) ** 2 > (r_2 + r_1) ** 2:
                print(0)

            elif (x_2 - x_1) ** 2 + (y_2 - y_1) ** 2 == (r_2 + r_1) ** 2:
                print(1)

            elif (x_2 - x_1) ** 2 + (y_2 - y_1) ** 2 < (r_2 + r_1) ** 2:
                if min(r_1, r_2) + math.sqrt((x_2 - x_1) ** 2 + (y_2 - y_1) ** 2) < max(r_1, r_2):
                    print(0)
                elif min(r_1, r_2) + math.sqrt((x_2 - x_1) ** 2 + (y_2 - y_1) ** 2) > max(r_1, r_2):
                    print(2)
                else:
                    print(1)