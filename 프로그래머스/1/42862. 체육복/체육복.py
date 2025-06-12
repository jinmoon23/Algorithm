# 최대한 많은 학생이 체육수업을 들어야 합니다.
# 학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다.
# 체육수업을 들을 수 있는 학생의 최댓값을 return
# 여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.

def solution(n, lost, reserve):
    answer = n
    lost_set = set(lost) - set(reserve)
    reserve_set = set(reserve) - set(lost)
    
    answer -= len(lost_set)
    for l in lost_set:
        left = l - 1
        right = l + 1
        
        for i,r in enumerate(reserve_set):
            if left == r:
                answer += 1
                reserve_set.remove(r)
                break
            elif right == r:
                answer += 1
                reserve_set.remove(r)
                break
            
    return answer