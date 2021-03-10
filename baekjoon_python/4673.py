# 출처: https://www.acmicpc.net/problem/4673

def calculate(value):
    sum = value
    for i in str(value):
        sum += int(i)
    return sum

def self_number():
    numbers = [[i,0] for i in range(1,10001)]
    for i in range(len(numbers)):
        if numbers[i][1] == 1:
            continue
        current = i + 1
        while True:
            if current > 10000:
                break

            next = calculate(current)

            if next > 10000:
                break

            numbers[next-1][1] = 1
            current = next
    numbers.sort(key = lambda numbers: numbers[1])

    for i in numbers:
        if i[1] == 1:
            break
        print(i[0])

if __name__ == "__main__":
    self_number()
