# 출처: https://www.acmicpc.net/problem/15652
import sys
from collections import deque
 
input = sys.stdin.readline
 
def test(N,M):
    result = deque()
    for i in range(N):
        result.append([str(i+1)])
    if M > 1:
        dfs(N, M, 2, result)
 
    for i in result:
        print(" ".join(i))
 
def dfs(N, M, num, result):
    while len(result[0]) < num:
        value = result.popleft()
        for i in range(N):
            if is_possible(str(i+1), value):
                result.append(value + [str(i+1)])
 
    if len(result[0]) < M:
        dfs(N, M, num + 1, result)
 
def is_possible(check_value, list):
    if list[-1] <= check_value:
        return True
    else:
        return False

if __name__ == "__main__":
    N, M = list(map(int, input().rstrip().split()))
    test(N,M)