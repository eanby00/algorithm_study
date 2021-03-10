# 출처: https://www.acmicpc.net/problem/1904

import sys
input = sys.stdin.readline

def test(num):
    first = 1
    second = 2

    if num == 1:
        print(1)
        return
        
    elif num == 2:
        print(2)
        return

    for i in range(2, num):
        first, second = second, (first + second) % 15746

    print(second)
    return

if __name__ == "__main__":
    num = int(input())
    test(num)