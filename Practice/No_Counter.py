my_list = [1, 3, 2, 5, 4, 5, 2, 3]

# 1. 딕셔너리 컴프리헨션 + count() 메서드 활용
# count 메서드: 인자로 전달한 값 x가 몇 번 등장하는지 세어서 그 개수를 반환
my_dict = {key: my_list.count(key) for key in my_list}
print(my_dict) # {1: 1, 3: 2, 2: 2, 5: 2, 4: 1}

# 2. for문 활용
my_dict_for = {}

for item in my_list:
    if item in my_dict_for:
        my_dict_for[item] += 1
    else:
        my_dict_for[item] = 1

print(my_dict_for) # {1: 1, 3: 2, 2: 2, 5: 2, 4: 1}