# 출처: https://www.acmicpc.net/problem/2941
import sys
input = sys.stdin.readline

if __name__ == "__main__":
    test_line = input().rstrip()
    characters = ["c=","c-","dz=","d-","lj","nj","s=","z="]

    first = ["c","d","l","n","s","z"]
    second = ["=","-","z","j"]
    last = ["="]
    cnt = len(test_line)
    i = 0
    while i < len(test_line):
        if test_line[i] in first:
            if i+1 < len(test_line) and test_line[i]+test_line[i+1] in characters:
                cnt -= 1
                i += 1
            elif i+2 < len(test_line) and test_line[i] + test_line[i+1] + test_line[i+2] in characters:
                cnt -= 2
                i += 2
        i += 1
    
    print(cnt)


# if __name__ == "__main__":
    # test_line = input().rstrip()
    # characters = ["c=","c-","dz=","d-","lj","nj","s=","z="]
    # letters = ["c","=","-","d","z","l","j","n","s"]

    # first = ["c","d","l","n","s","z"]
    # second = ["=","-","z","j"]
    # last = ["="]

    # letter_check = ""
    # cnt = 0
    # for i in test_line:
    #     if i not in letters:
    #         cnt += 1
    #     else:
    #         letter_check += i

    #         if len(letter_check) == 1:
    #             if i not in first:
    #                 cnt += 1
    #                 letter_check = ""
    #         elif len(letter_check) == 2:
    #             if i not in second:
    #                 if i in first:
    #                     cnt += 1
    #                     letter_check = i
    #                 else:
    #                     cnt += 2
    #                     letter_check = ""
    #         elif len(letter_check) == 3:
    #             if i not in last:
    #                 if i in first:
    #                     cnt += 2
    #                     letter_check = i
    #                 else:
    #                     cnt += 3
    #                     letter_check = ""


    #     if letter_check in characters:
    #         cnt += 1
    #         letter_check = ""
    # if len(letter_check) != 0:
    #     cnt += len(letter_check)
    
    # print(cnt)