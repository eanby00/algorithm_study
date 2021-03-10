# 출처: https://www.acmicpc.net/problem/2581

import sys
input = sys.stdin.readline
 
if __name__ == "__main__":
	start = int(input())
	end = int(input())
	sum = 0
	min = 0
 
	for i in range(start, end+1):
		check = True
		if i == 1:
			check = False
 
		else:
			for j in range(2,i):
				if i % j == 0:
					check = False
					break
		if check:
			if min == 0:
				min = i
			sum += i
	if min == 0:
		print(-1)
	else:
		print(sum)
		print(min)