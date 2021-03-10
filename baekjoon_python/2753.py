# 출처: https://www.acmicpc.net/problem/2753

n = int(input())

if n % 400 == 0:
    print("1")
elif n % 100 == 0:
    print("0")
elif n % 4 == 0:
    print("1")
else:
    print("0")