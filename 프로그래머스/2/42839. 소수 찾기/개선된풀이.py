import itertools

def solution(numbers):
    num_set = set()
    # 모든 길이의 순열을 set에 추가 (중복 자동 제거)
    for i in range(1, len(numbers) + 1):
        for perm in itertools.permutations(numbers, i):
            num = int(''.join(perm))
            num_set.add(num)
    # 소수 개수 세기
    return sum(1 for num in num_set if is_prime(num))

def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True

solution('17')