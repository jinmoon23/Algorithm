import sys
sys.stdin = open("input.txt")
# N개의 수로 이루어진 수열 A1, A2, ..., AN이 주어진다.
# 또, 수와 수 사이에 끼워넣을 수 있는 N-1개의 연산자가 주어진다.
# 주어진 수의 순서를 바꾸면 안 된다.
# 식의 계산은 연산자 우선 순위를 무시하고 앞에서부터 진행해야 한다.
# 또, 나눗셈은 정수 나눗셈으로 몫만 취한다.
# N개의 수와 N-1개의 연산자가 주어졌을 때, 만들 수 있는 식의 결과가 최대인 것과 최소인 것을 구하는 프로그램

N = int(input()) # 수의 개수
numbers = list(map(int, input().split())) # 수열
add, sub, mul, div = map(int, input().split()) # + - * //
mx,mn = int(-1e9), int(1e9)

def dfs(n, ans, add, sub, mul, div):
    global mx, mn
    if n == N:
        mx = max(mx, ans)
        mn = min(mn, ans)
        return
    if add > 0:
        dfs(n + 1, ans + numbers[n], add - 1, sub, mul, div)
    if sub > 0:
       dfs(n + 1, ans - numbers[n], add, sub - 1, mul, div)
    if mul > 0:
        dfs(n + 1, ans * numbers[n], add, sub, mul - 1, div)
    if div > 0:
        dfs(n + 1, int(ans / numbers[n]), add, sub, mul, div - 1)

dfs(1,numbers[0],add,sub,mul,div)
print(mx, mn, sep='\n')