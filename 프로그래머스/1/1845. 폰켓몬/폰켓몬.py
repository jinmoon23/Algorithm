def solution(nums):
    n = len(nums) / 2
    sets = set(nums)
    return min(n, len(sets))