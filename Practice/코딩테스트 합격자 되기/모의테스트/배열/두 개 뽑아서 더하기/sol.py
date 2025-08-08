# 정수 배열 numbers
# 배열의 서로 다른 인덱스 값 2개를 더해 만들 수 있는 모든 경우의 수를 배열에 담아 리턴
# 제약 조건
# numbers 길이는 2이상 100 이하
# numbers의 모든 수는 0이상 100(10^2)이하
def solution(arr):
    result = set()
    for i in range(len(arr)):
        for j in range(i+1,len(arr)):
            result.add(arr[i] + arr[j])
    result = sorted(list(result))
    return result

print(solution([2,1,3,4,1]))
print(solution([5,0,2,7]))

