def solution(s):
    answer = []
    counter, zero_counter = convert_binary(s, 0, 0)
    
    answer.append(counter)
    answer.append(zero_counter)
    
    return answer

def convert_binary(s, counter, zero_counter):
    dummy_s = ''
    if s == '1': 
        return counter, zero_counter
    counter += 1
    for char in s:
        if char == '0':
            zero_counter += 1
            continue
        dummy_s += char
    
    c = len(dummy_s)
    dummy_s_binary = bin(c)
    return convert_binary(dummy_s_binary[2:], counter, zero_counter)
    