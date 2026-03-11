def solution(nums):
    answer = 0
    n = len(nums) // 2
    sets = set(nums)
    return min(len(sets), n)
    