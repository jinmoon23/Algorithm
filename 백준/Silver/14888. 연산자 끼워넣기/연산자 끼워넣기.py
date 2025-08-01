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