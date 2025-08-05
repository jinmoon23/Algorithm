import sys
sys.stdin = open("input.txt")

S = int(input())

sum_n = [{'count': 0},{'sum': 0}]
k = 1
while sum_n[1]['sum'] < S:
    sum_n[1]['sum'] += k
    if sum_n[1]['sum'] > S:
        break
    k += 1
    sum_n[0]['count'] += 1
print(sum_n[0]['count'])