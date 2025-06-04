def solution(phone_book):
    phone_dict = {phone: 1 for phone in phone_book}  # 모든 번호를 해시에 저장

    for phone in phone_book:
        prefix = ""
        for char in phone[:-1]:  # 마지막 글자 전까지 접두어 생성
            prefix += char
            if prefix in phone_dict:
                return False  # 접두어가 해시에 존재하면 false 반환
    return True
