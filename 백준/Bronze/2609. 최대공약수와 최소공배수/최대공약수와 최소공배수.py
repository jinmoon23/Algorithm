num_1, num_2 = map(int, input().split())
# 1. 두 수중 하나의 약수집합을 구한다
num_1_dividers = [i for i in range(1, num_1+1) if num_1 % i == 0]
# 2. 공통약수 중 최대값을 구한다
max_divider = 1
for d in num_1_dividers:
    if num_2 % d == 0:
        max_divider = d
# 3. 도출한 최대공약수를 활용해 최소공배수를 구한다
max_common_multiple = (num_1 // max_divider) * (num_2 // max_divider) * max_divider
# 4. 연산을 끝낸 최소공배수와 최대공약수를 출력한다
print(max_divider)
print(max_common_multiple)