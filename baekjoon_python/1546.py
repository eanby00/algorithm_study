# 출처: https://www.acmicpc.net/problem/1546

import sys
input = sys.stdin.readline

if __name__ == "__main__":
    N = int(input())
    score = list(map(int, input().rstrip().split()))
    max_score = max(score)
    for i in range(len(score)):
        score[i] = score[i] / max_score * 100
    print(sum(score)/len(score))
