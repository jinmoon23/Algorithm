def solution(phone_book):
    phone_book.sort()  # 1. 전화번호 정렬
    for i in range(len(phone_book) - 1):
        # 2. 인접한 두 번호만 비교
        if phone_book[i+1].startswith(phone_book[i]):
            return False  # 접두어가 있으면 False
    return True  # 접두어가 없으면 True
