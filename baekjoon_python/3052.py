# 출처: https://www.acmicpc.net/problem/3052
import sys
input = sys.stdin.readline

if __name__ == "__main__":
    result = set()
    for _ in range(10):
        result.add( int(input()) % 42)
    print(len(result))