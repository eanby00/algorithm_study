# 출처: https://www.acmicpc.net/problem/1157

import sys
input = sys.stdin.readline

if __name__ == "__main__":
    test = input().rstrip()
    test = test.upper()
    result = [[i,0] for i in range(65, 91)]
    
    for i in range(len(test)):
        result[ord(test[i])-65][1] += 1
    result.sort(key = lambda result: result[1], reverse = True)

    if result[0][1] == result[1][1]:
        print("?")
    else:
        print(chr(result[0][0]))

