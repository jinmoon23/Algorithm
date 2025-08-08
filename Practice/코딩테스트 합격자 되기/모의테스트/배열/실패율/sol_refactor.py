def solution(N, stages):
    # N이 5일 때 users 배열의 인덱스는 stage가 되고 값은 클리어중인 유저의 수를 의미함. 0번째 값은 의미없음.
    # 7번째 인덱스 값은 마지막 스테이지 통과한 유저를 의미
    users = [0] * (N + 2)
    for stage in stages:
        users[stage] += 1
    result = []
    # 미리 총 유저의 수를 계산해두고 아래에서 누적적으로 제하면서 구하면 시간복잡도가 줄어든다
    total_user = len(stages)
    for i in range(1, N+1):
        # 이 부분이 sum 때문에 시간복잡도를 올린다. 수정해야함
        # total_user = sum(users[i:])
        playing = users[i]
        if playing == 0:
            result.append((i,0))
        else:
            result.append((i,playing/total_user))
            total_user -= playing
    result = sorted(result, key= lambda x:x[1], reverse=True)
    return [x for x, rate in result]

print(solution(5,[2,1,2,6,2,4,3,3]))
