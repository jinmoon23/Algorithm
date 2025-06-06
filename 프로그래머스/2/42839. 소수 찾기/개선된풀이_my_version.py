import itertools

def solutions(numbers):
    answer = 0
    num_set = set()
    for i in range(1,len(numbers)+1):
        for permu in itertools.permutations(numbers,i):
            num_set.add(int(''.join(permu)))
    for num in num_set:
        if is_prime(num): answer += 1
    return answer

def is_prime(n):
    if n < 2: return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0: return False
    return True

solutions('123')