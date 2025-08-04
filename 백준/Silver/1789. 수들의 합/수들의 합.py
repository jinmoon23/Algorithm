S = int(input())

sum_n = [0,0]
k = 1
while sum_n[1] < S:
    sum_n[1] += k
    if sum_n[1] > S:
        break
    k += 1
    sum_n[0] += 1
print(sum_n[0])