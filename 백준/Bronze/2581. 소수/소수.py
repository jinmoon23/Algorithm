import math

def is_prime(n):
    if n < 2: return False
    for i in range(2, int(math.sqrt(n))+1):
        if n % i == 0:
            return False
    return True

M = int(input())
N = int(input())

prime_lst = []
for n in range(M,N+1):
    if is_prime(n):
        prime_lst.append(n)

if prime_lst:
    print(sum(prime_lst))
    print(prime_lst[0])
else:
    print(-1)
