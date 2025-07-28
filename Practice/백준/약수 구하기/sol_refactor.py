import sys
sys.stdin = open("input.txt")

tc = int(input())
for _ in range(tc):
    N, K = map(int, input().split())
    # 리스트 컴프리헨션을 통해 아래 주석처리한 코드를 간소화할 수 있음
    divider_list = [i for i in range(1, N+1) if N % i == 0]
    # for i in range(1,N+1):
    #     # 2. 약수를 준비한 리스트에 인입
    #     if N % i == 0:
    #         divider_list.append(i)
    print(divider_list[K-1] if len(divider_list) >= K else 0)