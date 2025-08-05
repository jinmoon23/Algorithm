import sys
sys.stdin = open("input.txt")

H, W = map(int, input().split())
b_h_lst = list(map(int, input().split()))
total_height = 0

for i, block in enumerate(b_h_lst):
    if i - 1 < 0 or i + 1 >= W: continue
    water_height = min(max(b_h_lst[:i]),max(b_h_lst[i + 1:])) - block
    # 음수인 경우 예외처리가 없으면 답이 안나옴
    if water_height > 0:
        total_height += water_height
print(total_height)
