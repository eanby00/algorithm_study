# 출처: https://www.acmicpc.net/problem/10869
import sys

nums = list(map(int, sys.stdin.readline().rstrip().split()))
print(nums[0] + nums[1])
print(nums[0] - nums[1])
print(nums[0] * nums[1])
print(nums[0] // nums[1])
print(nums[0] % nums[1])