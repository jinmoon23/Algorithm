N = int(input())
numbers = list(map(int, input().split()))
min_num = numbers[0]
max_num = numbers[0]
for i in range(N):
    if numbers[i] < min_num:
        min_num = numbers[i]
    if numbers[i] > max_num:
        max_num = numbers[i]
print(min_num, max_num)