def solution(n, lost, reserve):
    answer = n
    # lost와 reserve 배열 모두에 포함된 학생번호 제외하기
    lost_set = set(lost) - set(reserve)
    reserve_set = set(reserve) - set(lost)
    answer -= len(lost_set)

    for l in lost_set:
        left = l - 1
        right = l + 1
        # 2중 for문 제거
        # remove 메서드 사용하게 되면 break 필요 없어짐
        if left in reserve_set:
            answer += 1
            reserve_set.remove(left)
        elif right in reserve_set:
            answer += 1
            reserve_set.remove(right)
    return answer