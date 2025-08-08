# 제약 조건
# N: 1이상 500이하 자연수
# stages: 길이는 1이상 200,000 이하
def solution(N, stages):
    # 1부터 N+1을 순회하면서 (각각이 스테이지 번호)
    # n보다 크거나 같은 값의 수를 분모로, n과 같은 값을 분자로 한 값을 실패율로 정의
    # n이 N일 때는 마지막 스테이지를 통과하지 못한 상태
    # n이 N+1일 때는 마지막 스테이지 통과 상태 -> 이건 고려안해도 될듯
    fail_rate = []
    for n in range(1, N+1):
        top = 0
        bottom = 0
        # 이 접근은 전체 스테이지 수(N) 보다 도전하는 게이머 수가 적으면 bottom 예외처리를 해야하는 방식임
        for user_state in stages:
            if user_state >= n:
                bottom += 1
            if user_state == n:
                top += 1
        if bottom == 0:
            fail_rate.append((n,0))
        else:
            fail_rate.append((n, top/bottom))
    fail_rate = sorted(fail_rate, key= lambda x: x[1], reverse=True)
    return [x for x, rate in fail_rate]
print(solution(5,[2,1,2,6,2,4,3,3]))
print(solution(5,[1,1,1]))
print(solution(4,[4,4,4,4]))