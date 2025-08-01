import sys
sys.stdin = open("input.txt")

N, M = map(int, input().split())
cnt, total = 0, 0
for i in range(1, M+1):
    for _ in range(i):
        cnt += 1
        if N <= cnt <= M:
            total += i
        if cnt == M:
            print(total)
            # 권장되는 방식은 아님
            exit()