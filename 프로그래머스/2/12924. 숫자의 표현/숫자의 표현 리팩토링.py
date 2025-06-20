def solution(n):
    answer = 0
    for k in range(1, n+1):
        # 등차수열 합 공식: S = k(2a + k - 1)/2 = n
        # a는 시작하는 자연수 / k는 더하는 자연수 갯수를 의미함
        # 2n = k(2a + k - 1)
        # a = (2n/k - k + 1)/2 = (2n/k)/2 - (k+1)/2
        # (2n/k)의 값이 짝수가 아니면 a가 자연수 일 수 없다. 즉, 짝수인 경우에만 해당 식이 성립한다.
        # 짝수가 아닌 경우를 곧바로 제외함
        if (2 * n) % k != 0:
            continue
        # temp는 분자를 나타냄
        temp = (2 * n) // k - k + 1
        # a가 자연수이기 위한 조건
        if temp > 0 and temp % 2 == 0:
            a = temp // 2
            if a > 0:
                answer += 1
    return answer