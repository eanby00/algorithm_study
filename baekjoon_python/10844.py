# 출처: https://www.acmicpc.net/problem/10844
import sys
input = sys.stdin.readline

if __name__ == "__main__":
    num = int(input())
    list_1 = [0,1,1,1,1,1,1,1,1,1]
    list_2 = [None for _ in range(10)]

    for i in range(1, num):
        for j in range(len(list_2)):
            if j == 0:
                list_2[j] = list_1[j+1] % 1000000000
            elif j == 9:
                list_2[j] = list_1[j-1] % 1000000000
            else:
                list_2[j] = (list_1[j-1] + list_1[j+1]) % 1000000000
        list_1, list_2 = list_2, [None for _ in range(10)]

    result = 0
    for i in list_1:
        result += i
        result %= 1000000000

    print(result)