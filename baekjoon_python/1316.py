# 출처: https://www.acmicpc.net/problem/1316

import sys
input = sys.stdin.readline

if __name__ =="__main__":
    result = 0
    for _ in range(int(input())):
        test_line = input().rstrip()
        test = set(test_line)
        pop = None
        check = True

        for i in test_line:
            if not pop:
                pop = i
                test.remove(i)
            else:
                if i == pop:
                    continue
                else:
                    if i in test:
                        pop = i
                        test.remove(i)

                    elif i not in test:
                        check = False
                        break

        if check:
            result += 1
    print(result)