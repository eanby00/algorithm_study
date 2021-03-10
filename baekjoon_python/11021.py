# 출처: https://www.acmicpc.net/problem/11021
import sys
input = sys.stdin.readline

if __name__ == "__main__":
    for i in range(int(input())):
        a, b = list(map(int, input().split()))
        print("Case #"+str(i+1)+":", a + b)