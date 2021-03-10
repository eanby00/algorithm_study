# 출처: https://www.acmicpc.net/problem/2447
# 내가 짠 거 아님 출처: https://www.acmicpc.net/board/view/1656
# 후에 다시 해볼 것
# 모두 *로 만들어두고 " " 부분을 찾아서 바꾸기

import sys
from math import log
write = sys.stdout.write
input = sys.stdin.readline


N = int(input())

# 반복시킬 횟수 결정
k = 0
while True:
    if N == 3 ** k:
        break
    k += 1
bg = [['*' for x in range(N)] for i in range(N)]



for exponential in range(1, k+1):
	for row in range(3**(exponential-1), N, 3**exponential):
		for col in range(3**(exponential-1), N, 3**exponential):
			i = 0
			while (i < 3**(exponential-1) and (col+i) < N):
				j = 0
				while (j < 3**(exponential-1) and (row+j) < N):
					bg[row+j][col+i] = ' '
					j += 1
				i += 1

for row in range(N):
	for col in range(N):
		write(bg[row][col])
	write('\n')