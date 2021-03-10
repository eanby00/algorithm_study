# 출처: https://www.acmicpc.net/problem/15596

def solve(a):
    ans = 0
    for i in a:
        ans += i
    return ans


# 내장 함수 sum을 사용하는 편이 for문을 통해 전체를 돌면서 더할 때보다 시간적으로 좋은 성능을 보여줌
def solve(a):
    ans = sum(a)
    return ans