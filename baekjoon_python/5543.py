# 출처: https://www.acmicpc.net/problem/5543
import sys
input = sys.stdin.readline

if __name__ == "__main__":
    small_ham = 2000
    for _ in range(3):
        ham = int(input().rstrip())
        if small_ham > ham:
            small_ham = ham
    
    small_value = 2000
    for _ in range(2):
        value = int(input().rstrip())
        if small_value > value:
            small_value = value

    print(small_ham+small_value-50)

