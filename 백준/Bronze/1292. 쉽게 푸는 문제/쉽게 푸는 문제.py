N, M = map(int, input().split())
arr = []
for i in range(1, 1001):
    for j in range(i):
        arr.append(i)
        if len(arr) == M: break
    if len(arr) == M: break
answer = sum(arr[N-1:M])
print(answer)