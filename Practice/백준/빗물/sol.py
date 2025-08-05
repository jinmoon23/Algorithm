import sys
sys.stdin = open("input.txt")

# 테스트케이스는 통과하지만 제출 시 시간초과가 발생함

H, W = map(int, input().split())
b_h_lst = list(map(int, input().split()))

matrix = [[0 for _ in range(W)] for _ in range(H)]

for i in range(H):
    for j in range(W):
        t = 0
        for b_h in b_h_lst:
            p = H - 1
            while b_h > 0:
                matrix[p][t] = 1
                b_h -= 1
                p -= 1
            t += 1

count_num = 0
for i in range(H):
    for j in range(W):
        if matrix[i][j] == 1:
            dummy = 0
            for k in range(1, W):
                if j + k >= W: continue
                if matrix[i][j+k] == 0:
                    dummy += 1
                else:
                    count_num += dummy
                    dummy = 0
                    break
print(count_num)