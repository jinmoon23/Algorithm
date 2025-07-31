import sys
import math
sys.stdin = open("input.txt")

def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(math.sqrt(n)) + 1):
        if n % i == 0:
            return False
    return True

N = int(input())
numbers = list(map(int, input().split()))
count = sum(is_prime(num) for num in numbers)

print(count)