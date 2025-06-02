# 1. 순회하면서 크기가 같은 값이 몇개인지 찾아서 딕셔너리로 정리
# 2. 1번 입출력 예의 경우 아래와 같이 정리됨
# {1:1, 2:2, 3:2, 4:1, 5:2}
# 3. k가 6이기 때문에 2,3,5 선택
# 4. 2번 입출력 예의 경우 아래와 같이 정리됨
# {1:1, 2:2, 3:2, 4:1, 5:2}
# 5. k가 4이기 때문에 2,3 또는 3,5 또는 2,5 크기의 귤 선택이 가능
# 6. 3번 입출력 예의 경우 아래와 같이 정리됨
# {1:4, 2:3, 3:1}
# 7. k가 2

from collections import Counter

def solution(k, tangerine):
    c = Counter(tangerine)
    answer = 0
    common = c.most_common()
    for (size,count) in common:
        k -= count
        answer += 1
        if k <= 0: break
    # 서로 다른 종류의 수의 최솟값을 return       
    return answer