# 출처: https://www.acmicpc.net/problem/2579
# 다시 풀어볼 것(따로 푼 내 풀이는 메모리적으로 비효율적인 점화식이었음)

import sys
input = sys.stdin.readline

if __name__ == "__main__":
    num_list = []
    for i in range(int(input())):
        num_list.append(int(input()))
    
    if len(num_list) > 2:
        a = num_list[0]
        b = num_list[0] + num_list[1]
        c = max(num_list[0], num_list[1]) + num_list[2]
        d = 0

        for i in range(3, len(num_list)):
            d = max(b, a + num_list[i-1]) + num_list[i]
            a, b, c, d = b, c, d, 0   
        print(c)
    elif len(num_list) > 1:
        print(num_list[0] + num_list[1])
    else:
        print(num_list[0])