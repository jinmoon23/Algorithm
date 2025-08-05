import sys
sys.stdin = open("input.txt")

S = int(input())

total = 0
count = 0

while total + count + 1 <= S:
    count += 1
    total += count

print(count)
