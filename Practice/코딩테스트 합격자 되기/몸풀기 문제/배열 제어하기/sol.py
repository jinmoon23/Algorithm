# 정수 배열 받아서 중복값 제거하고 데이터를 내림차순으로 정렬해서 반환하는 solution 함수
# 제한 시간 3초
# 배열의 길이는 2이상 100,000(10^5) 이하 -> O(N^2) 알고리즘 사용하면 안됨
# 각 데이터 크기는 -100,000 이상 100,000 이하

def sol(arr):
    arr_to_set = set(arr)
    set_to_arr = list(arr_to_set)
    set_to_arr.sort(reverse=True)
    return set_to_arr

print(sol([4,2,2,1,3,4]))