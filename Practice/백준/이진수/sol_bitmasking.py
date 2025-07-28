import sys
sys.stdin = open("input.txt")

tc = int(input())
for _ in range(tc):
    N = int(input())
    index = 0
    res = []
    while N:
        # N의 2진수 기준 최하위 비트가 1인지 아닌지 판단하는 연산자 &
        if N & 1:
            res.append(str(index))
        # 비트 시프트 할당 연산
        N >>= 1
        index += 1
    print(" ".join(res))