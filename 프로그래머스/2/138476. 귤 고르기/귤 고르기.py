from collections import Counter

def solution(k, tangerine):
    # 1. 리스트에서 특정 값이 몇 번 나오는지 딕셔너리로 변환
    # ex) Counter({3: 2, 2: 2, 5: 2, 1: 1, 4: 1})
    c = Counter(tangerine)
    answer = 0
    # 2. 빈도수가 높은 사이즈와 카운트값을 튜플로 정리
    # ex) [(3, 2), (2, 2), (5, 2), (1, 1), (4, 1)]
    common = c.most_common()
    for (size,count) in common:
        # 판매하려는 귤 갯수를 빼면서 answer 더하기
        k -= count
        answer += 1
        # 귤 갯수가 0보다 작거나 같아지면 연산 종료
        if k <= 0: break
    # 서로 다른 종류의 수의 최솟값을 return       
    return answer