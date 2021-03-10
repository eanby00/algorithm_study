# 출처: https://www.acmicpc.net/problem/1427
import sys
input = sys.stdin.readline

if __name__ == "__main__":
    num = input().rstrip()
    test_list = [i for i in num]
    test_list.sort(reverse = True)
    print("".join(test_list))