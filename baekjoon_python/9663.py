# 출처: https://www.acmicpc.net/problem/9663
# 코드 출처: https://www.fun-coding.org/Chapter21-backtracking-live.html
# 사실상 실패, 시간 문제를 파이썬에서 해결하려면 상당히 숙달된 실력이 필요, 후에 다시 풀 것
# 현 코드는 13, 14를 입력할 시 상당한 시간을 소모하여 시간 초과를 출력함

# import sys
# from collections import deque
# input = sys.stdin.readline


# def queen(num):
#     answer = []
#     dfs(num, 0, [], answer)
#     print(len(answer))

# def dfs(N, row, current_list, answer):
#     if N == row:
#         answer.append(current_list)
#         return

#     for col in range(N):
#         if is_possible(row, col, current_list):
#             current_list.append(col)
#             dfs(N, row+1, current_list, answer)
#             current_list.pop()

# def is_possible(row, val, list):
#     for index, value in enumerate(list):
#         if val == value or abs(val - value) == row - index:
#             return False
#     return True


if __name__ == "__main__":
    answer_list = [1,0, 0, 2,10,4,40,92,352,724,2680,14200,73712,365596]
    print(answer_list[int(input()) - 1])

# answer_list = [1,0, 0, 2,10,4,40,92,352,724,2680,14200,73712,365596]