def solution(n):
    answer = 0
    for i in range(1,n+1):
        # 등차수열 합 공식
        # a는 등차수열을 시작하는 수 i는 총 몇개를 더할지
        # 2n = i(2a + i - 1) -> 2n/i = 2a + i - 1 -> 2n/i - i + 1 = 2a
        # 2n이 i로 나뉘어떨어져야 합공식을 충족함
        if (2 * n) % i != 0: continue
        # a = (2n/i - i + 1)/2 -> (2n/i)/2 - (i - 1)/2
        temp = (2 * n) // i - i + 1
        if temp > 0 and temp % 2 == 0:
            a = temp // 2
            if a > 0:
                answer += 1
    return answer