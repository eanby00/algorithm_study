# 출처: https://www.acmicpc.net/problem/1003

import sys
input = sys.stdin.readline

def fibo(num, save_list):
    if len(save_list) > num and save_list[num]:
        return f"{save_list[num][0]} {save_list[num][1]}"

    save_point = len(save_list)

    while len(save_list) <= num:
        save_list.append([None,None])

    for i in range(save_point, num+1):
        save_list[i] = [save_list[i-1][0] + save_list[i-2][0], save_list[i-1][1] + save_list[i-2][1]]

    return f"{save_list[num][0]} {save_list[num][1]}"


if __name__ == "__main__":
    save_list = [[1,0],[0,1]]
    for i in range(int(input())):
        num = int(input())
        print(fibo(num, save_list))