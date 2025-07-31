tc = int(input())
for _ in range(tc):
    N = 3
    A = list(map(int, input().split()))
    sorted_A = sorted(A)
    print(sorted_A[-N])
