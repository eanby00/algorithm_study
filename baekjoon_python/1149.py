# 출처: https://www.acmicpc.net/problem/1149
# 다시 풀어볼 것

import sys
input = sys.stdin.readline


if __name__ == "__main__":
    save_RGB = []
    dp = []
    save = 0
    for i in range(int(input())):
        save_RGB.append(list(map(int, input().rstrip().split())))
        dp.append([None,None,None])

    for i in range(0,len(save_RGB)):
        if i == 0:
            dp[0][0], dp[0][1], dp[0][2] = save_RGB[0][0], save_RGB[0][1], save_RGB[0][2]
        else:
            dp[i][0] = min(dp[i-1][1], dp[i-1][2]) + save_RGB[i][0]
            dp[i][1] = min(dp[i-1][0], dp[i-1][2]) + save_RGB[i][1]
            dp[i][2] = min(dp[i-1][1], dp[i-1][0]) + save_RGB[i][2]

    print(min(dp[-1]))