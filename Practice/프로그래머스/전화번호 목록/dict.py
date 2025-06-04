def is_prefix(dict1, dict2):
    # dict1이 dict2의 접두어인지 확인
    for k in dict1:
        # 접두어가 아니라면 False 반환
        if k not in dict2 or dict1[k] != dict2[k]:
            return False
    return True

def solution(phone_book):
    dict_list = []
    for phone_number in phone_book:
        num_dict = {i: n for i, n in enumerate(phone_number)}
        dict_list.append(num_dict)
    for i in range(len(dict_list)):
        for j in range(len(dict_list)):
            if i == j:
                continue
            # 길이가 더 짧은 쪽이 접두어가 될 수 있음
            if len(dict_list[i]) > len(dict_list[j]):
                continue
            if is_prefix(dict_list[i], dict_list[j]):
                return False
    return True

solution(["119", "97674223", "1195524421"])