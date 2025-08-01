import sys
sys.stdin = open("input.txt")

N, M = map(int, input().split())
arr = []
for i in range(1, 1001):
    for j in range(i):
        arr.append(i)
        # 구간의 끝인 M 까지만 수열이 생성되면 됨
        if len(arr) == M: break
    if len(arr) == M: break
answer = sum(arr[N-1:M])
print(answer)