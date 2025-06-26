def solution(brown, yellow):
    # 1. yellow 의 약수를 모두 구하기
    divider_list = []
    for i in range(1,yellow + 1):
        if yellow % i == 0:
            value = yellow // i
            divider_list.append((i,value))
    for row, col in divider_list:
        if row < col: continue
        if (row + 2) * 2 + col * 2 == brown:
            return [row + 2, col + 2]