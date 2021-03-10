# 출처: https://www.acmicpc.net/problem/1193

import sys
imput = sys.stdin.readline

if __name__ == "__main__":
    num = int(input())
    cnt = 1

    sum = 0
    i = 1
    while True:
        sum += i
        if num <= sum:
            break
        i += 1
    cnt = sum - i
    # 저장된 i값은 =>의 왼쪽 값을 저장하고 있음
    # 저장된 cnt값은 이전까지의 카운트

    if i%2 == 0: # 짝수라면 위에서 시작
        child, parent = 1, i
        while True:
            cnt += 1
            if cnt == num:
                break
            child, parent = child + 1, parent - 1


    else: # 홀수라면 아래에서 시작
        child, parent = i, 1
        while True:
            cnt += 1
            if cnt == num:
                break
            child, parent = child - 1, parent + 1
    print(str(child)+"/"+str(parent))

    # 짝은 위에서
    # 홀은 아래에서
    # 1 => 합이 2인 위치에
    # 2 => 합이 3인 위치에, 위(1/2)
    # 3 => 합이 4인 위치에, 아래(3/1)
    # 4 => 합이 5인 위치에, 위(1/4)
    # 5 => 합이 6인 위치에, 아래(5/1)
    # 6 => 합이 7인 위치에, 위
    # 7 => 합이 8인 위치에, 아래
    # 8 => 합이 9인 위치에, 위
