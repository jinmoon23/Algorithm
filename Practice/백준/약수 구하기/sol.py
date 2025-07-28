import sys
sys.stdin = open("input.txt")

tc = int(input())
for _ in range(tc):
    N, K = map(int, input().split())
    divider_list = []
    # 1. 1부터 N까지의 값을 N과 나머지 연산함
    for i in range(1,N+1):
        # 2. 약수를 준비한 리스트에 인입
        if N % i == 0:
            divider_list.append(i)
    print(divider_list[K-1] if len(divider_list) >= K else 0)