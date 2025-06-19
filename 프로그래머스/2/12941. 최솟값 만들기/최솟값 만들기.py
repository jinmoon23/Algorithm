def solution(A,B):
    answer = 0
    sorted_A = sorted(A)
    reverse_sorted_B = sorted(B)[::-1]
    print(reverse_sorted_B)
    for i in range(len(A)):
        answer += sorted_A[i] * reverse_sorted_B[i]
        print(answer)
    return answer