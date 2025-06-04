def solution(phone_book):
    answer = True
    phone_dict = {phone:1 for phone in phone_book}

    for phone in phone_book:
        prefix = ''
        for n in phone[:-1]:
            prefix += n
            if prefix in phone_dict:
                answer = False
    return answer

solution(["119", "97674223", "1195524421"])