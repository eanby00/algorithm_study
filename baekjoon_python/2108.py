# 출처: https://www.acmicpc.net/problem/2108
import sys

input = sys.stdin.readline
def check_count(list):
    check = {}
    for i in list:
        if i in check:
            check[i] += 1
        else:
            check[i] = 1
    result = []
    for key, value in check.items():
        result.append([key, value])

    result.sort(key = lambda result: result[1])

    if len(result) > 1 and result[-1][1] == result[-2][1]:
        return_result = None
        for i in range(len(result)-1, 0, -1):
            if result[i][1] == result[i-1][1]:
                continue
            else:
                return_result = i+1
                break
        if not return_result:
            return_result = 1
        return result[return_result][0]
    else:
        return result[-1][0]



if __name__ == "__main__":
    test_list = []
    for _ in range(int(input())):
        test_list.append(int(input()))
    test_list.sort()

    print(int(round(sum(test_list)/ len(test_list),0)))
    print(test_list[len(test_list)//2])
    print(check_count(test_list))
    print(test_list[-1] - test_list[0])
