def solution(arr1, arr2):
    # arr1이 r1 * c1 행렬이라면 arr2는 반드시 c1 * c2 행렬이어야 곱셈이 가능함
    r1, c1 = len(arr1), len(arr1[0])
    r2, c2 = len(arr2), len(arr2[0])

    # result = [[0] for _ in range(c2) for _ in range(r1)]
    result = [[0] * c2 for _ in range(r1)]

    for i in range(r1):
        for j in range(c2):
            # c1 == r2 하지만 c1이 권장됨
            for k in range(c1):
                result[i][j] += arr1[i][k] * arr2[k][j]
    return result