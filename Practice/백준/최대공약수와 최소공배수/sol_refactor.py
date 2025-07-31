import sys
sys.stdin = open("input.txt")

def gcd(a, b):
    # 유클리드 호제법을 활용한 GCD 도출
    if a < b:
        a, b = b, a
    # 아래 while문을 통과하고 나면 b가 GCD가 됨
    while a % b != 0:
        a, b = b, a % b
    return b

num_1, num_2 = map(int, input().split())
gcd = gcd(num_1, num_2)

print(gcd)
print((num_1 * num_2) // gcd)