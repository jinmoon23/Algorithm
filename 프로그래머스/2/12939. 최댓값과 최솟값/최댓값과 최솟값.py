def solution(s):
    answer = ''
    numbers = list(map(int,s.split(' ')))
    print(numbers)
    answer = ' '.join(find_min_max(numbers))
    
    return answer

def find_min_max(numbers):
    if not numbers: return
    max_n = numbers[0]
    min_n = numbers[0]
    for n in numbers[1:]:
        if n > max_n:
            max_n = n
        elif n < min_n:
            min_n = n
    return (str(min_n), str(max_n))