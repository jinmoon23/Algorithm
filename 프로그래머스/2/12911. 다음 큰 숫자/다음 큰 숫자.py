def solution(n):
    answer = 0
    bin_n = bin(n)[2:]
    c_1 = count_one(bin_n)
    
    while True:
        n += 1
        bin_n = bin(n)[2:]
        c_2 = count_one(bin_n)
        if c_1 == c_2:
            answer = n
            break
    return answer

def count_one(binary_str):
    c_1 = 0
    for char in binary_str:
        if char == '1':
            c_1 += 1
    return c_1