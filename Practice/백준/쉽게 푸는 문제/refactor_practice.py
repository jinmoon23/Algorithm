import sys
sys.stdin = open("input.txt")
# 이 방식은 배열을 따로 생성하지 않기 때문에 공간복잡도를 줄일 수 있다.
def sol(N, M):
    cnt, total = 0, 0
    for i in range(1, 1001):
        for _ in range(i):
            cnt += 1
            if N <= cnt <= M:
                total += i
            if cnt == M:
                return total
    return 0
N, M = map(int, input().split())
print(sol(N,M))