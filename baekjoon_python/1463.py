# 출처: https://www.acmicpc.net/problem/1463

import sys
input = sys.stdin.readline

if __name__ == "__main__":
    check_list = [None for _ in range(10**6+1)]
    num = int(input())
    check_list[1] = 0
    
    for i in range(2, num+1):
        save = [check_list[i-1]]

        if i % 3 == 0:
            save.append(check_list[i//3])
        if i % 2 == 0:
            save.append(check_list[i//2])

        check_list[i] = min(save) + 1

    print(check_list[num])