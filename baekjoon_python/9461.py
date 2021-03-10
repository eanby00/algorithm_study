# 출처: https://www.acmicpc.net/problem/9461

import sys
input = sys.stdin.readline

def find_F(save_list, N):
    if len(save_list) - 1 >= N and save_list[N]:
        print(save_list[N-1])
        return 
    
    for j in range(len(save_list), N+1):
        save_list.append(save_list[j-5] + save_list[j-1])
    
    print(save_list[N-1])
    return

if __name__ == "__main__":
    save_list = [1,1,1,2,2]
    for i in range(int(input())):
        find_F(save_list, int(input()))


