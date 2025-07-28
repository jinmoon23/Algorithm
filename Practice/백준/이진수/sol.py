import sys
sys.stdin = open("input.txt")

tc = int(input())
for _ in range(tc):
    N = int(input())
    bin_str = bin(N)[2:][::-1]
    for index, value in enumerate(bin_str):
        if value == "1":
            print(index, end = " ")