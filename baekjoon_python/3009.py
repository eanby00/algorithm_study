# 출처: https://www.acmicpc.net/problem/3009

import sys
input = sys.stdin.readline

if __name__ == "__main__":
    first_x , first_y = list(map(int, input().rstrip().split()))
    second_x , second_y = list(map(int, input().rstrip().split()))
    last_x , last_y = list(map(int, input().rstrip().split()))
    
    lst_x = [first_x, second_x, last_x]
    lst_y = [first_y,second_y,last_y]
    lst_x.sort()
    lst_y.sort()
    
    if lst_x[0] == lst_x[1]:
        result_x = lst_x[-1]
    else:
        result_x = lst_x[0]

    if lst_y[0] == lst_y[1]:
        result_y = lst_y[-1]
    else:
        result_y = lst_y[0]

    print(result_x, result_y)
    
