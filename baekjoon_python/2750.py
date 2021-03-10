# 출처: https://www.acmicpc.net/problem/2750

import sys
input = sys.stdin.readline

if __name__ == "__main__":
    test_list =  []
    for _ in range(int(input())):
        test_list.append(int(input()))

    test_list.sort()
    test_list = list(map(str, test_list))
    print("\n".join(test_list))