# 출처: https://www.acmicpc.net/problem/1932

import sys
input = sys.stdin.readline

if __name__ == "__main__":
    dp = []
    save_list = []
    for i in range(int(input())):
        save = list(map(int, input().rstrip().split()))
        save_list.append(save)
        dp.append([None for _ in range(len(save))])

    for i in range(len(dp)):
        if i == 0:
            dp[0][0] = save_list[0][0]
        else:
            for j in range(len(dp[i])):
                if j == 0:
                    dp[i][j] = dp[i-1][j] + save_list[i][j]
                elif j == len(dp[i]) - 1:
                    dp[i][j] = dp[i-1][j-1] + save_list[i][j]
                else:
                    dp[i][j] = max(dp[i-1][j-1],dp[i-1][j]) + save_list[i][j]

    print(max(dp[-1]))
