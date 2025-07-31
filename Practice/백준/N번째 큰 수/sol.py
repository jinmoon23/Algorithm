import sys
sys.stdin = open("input.txt")

tc = int(input())
for _ in range(tc):
    N = 3
    A = sorted(list(map(int, input().split())))[-N]
    print(A)
