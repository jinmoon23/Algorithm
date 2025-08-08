# 2차원 행렬 arr1, arr2를 받아 arr1 * arr2 결과를 반환하라
# 제약조건: 행과열 길이는 2이상 100이하

def solution(arr1, arr2):
    # arr1의 행 개수와 arr2의 열 개수를 전체 크기로 하는 result 배열 생성하고 각 원소를 0으로 초기화
    # 곱셈 연산 결과를 각 원소에 할당 후 반환
    row = len(arr1)
    col = len(arr2[0])
    result = [[0 for _ in range(col)] for _ in range(row)]
    for i in range(row):
        for j in range(col):
            for k in range(col):
                # arr2[k][j] 를 arr2[k][i]로 적고 틀렸음
                result[i][j] += arr1[i][k] * arr2[k][j]
    return result


print(solution([[1,4],[3,2],[4,1]], [[3,3],[3,3]]))
print(solution([[2,3,2],[4,2,4],[3,1,4]], [[5,4,3],[2,4,1],[3,1,1]]))
