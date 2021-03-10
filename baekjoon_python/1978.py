# 출처: https://www.acmicpc.net/problem/1978

import sys
input = sys.stdin.readline
 
if __name__ == "__main__":
	leng = int(input())
	test_line = list(map(int,input().rstrip().split()))
	cnt = 0
 
	for i in test_line:
		check = True
		if i == 1:
			check = False
 
		else:
			for j in range(2,i):
				if i % j == 0:
					check = False
					break
		if check:
			cnt += 1
 
	print(cnt)