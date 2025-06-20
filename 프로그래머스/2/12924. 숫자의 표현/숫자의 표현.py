def solution(n):
    answer = 0
    k = 1
    while k <= n:
        sum_dummy = 0
        for i in range(k,n+1):
            sum_dummy += i
            if sum_dummy >= n: break
        if sum_dummy == n:
            answer += 1
        k += 1
        
    return answer