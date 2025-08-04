import sys
sys.stdin = open("input.txt")

N = int(input())
numbers = list(map(int, input().split()))
plus, minus, mul, div = map(int, input().split())
max_num, min_num = -1e9, 1e9

def dfs(n, ans, plus, minus, mul, div):
    global max_num, min_num
    # 종료조건 설정
    if n == N:
        if ans > max_num:
            max_num = ans
        if ans < min_num:
            min_num = ans
    if plus > 0:
        dfs(n + 1, ans + numbers[n], plus - 1, minus, mul, div)
    if minus > 0:
        dfs(n + 1, ans - numbers[n], plus, minus - 1, mul, div)
    if mul > 0:
        dfs(n + 1, ans * numbers[n], plus, minus, mul - 1, div)
    if div > 0:
        # c++14의 방식은 0으로 향하는 방식을 취함
        dfs(n + 1, int(ans / numbers[n]), plus, minus, mul, div - 1)

dfs(1, numbers[0], plus, minus, mul, div)
print(max_num, min_num, sep="\n")