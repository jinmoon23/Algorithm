# 1. s를 공백 기준으로 리스트로 변환하기
# 2. 0번 index 값이 문자인 경우와 아닌 경우로 구분하여 함수 동작

def solution(s):
    answer = []
    s_list = s.split(' ')
    
    for str in s_list:
        if not str:
            answer.append('')
            continue
        if str[0].isdecimal():
            answer.append(str[0] + str[1:].lower())
        else:
            if str[0].islower():
                answer.append(str[0].upper() + str[1:].lower())
            else:
                answer.append(str[0] + str[1:].lower())
                
    return ' '.join(answer)