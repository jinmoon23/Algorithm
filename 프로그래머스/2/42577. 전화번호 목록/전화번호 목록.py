def solution(phone_book):
    sorted_book = sorted(phone_book)
    for i in range(len(sorted_book) - 1):
        currNum, nextNum = sorted_book[i], sorted_book[i + 1]
        if (nextNum.startswith(currNum)): return False;
    return True