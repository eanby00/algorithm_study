# 출처: https://www.acmicpc.net/problem/7568
import sys
input = sys.stdin.readline

if __name__ == "__main__":
    test_list = []
    for i in range(int(input())):
        test_list.append(list(map(int,input().rstrip().split())) + [i, 1])
    #print(test_list)
    test_list.sort(key = lambda test_list: test_list[1])
    test_list.sort(key = lambda test_list: test_list[0])
    #print(test_list)
    for i in range(len(test_list)):
        for j in range(i+1,len(test_list)):
            if test_list[i][0] < test_list[j][0] and test_list[i][1] < test_list[j][1]:
                test_list[i][3] += 1

    test_list.sort(key = lambda test_list: test_list[2])
    #print(test_list)
    for i in test_list:
        print(i[-1], end = " ")

    