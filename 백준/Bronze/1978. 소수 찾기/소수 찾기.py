import math

def is_prime(n):
    if n < 2:
        return 0
    for i in range(2, int(math.sqrt(n))+1):
        if n % i == 0:
            return 0
    return 1

N = int(input())

numbers = [i for i in map(int,input().split())]
count = 0
for num in numbers:
    count += is_prime(num)
print(count)
