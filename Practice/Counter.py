from collections import Counter

test_list = [1, 3, 2, 5, 4, 5, 2, 3]

c = Counter(test_list)
# 1. Counter({3: 2, 2: 2, 5: 2, 1: 1, 4: 1})
print(c)

element_test = list(c.elements())
# 2. [1, 3, 3, 2, 2, 5, 5, 4]
print(element_test)

# 3.[(3, 2), (2, 2), (5, 2), (1, 1), (4, 1)]
# 인자로 정수값 n을 입력하면 상위 n개의 튜플만 반환
print(c.most_common())


d = Counter([1, 1, 1, 1, 2, 2, 2, 3])
c.subtract(d)
# 4. Counter({5: 2, 3: 1, 4: 1, 2: -1, 1: -3})
print(c)

c.update(d)
# 5. Counter({3: 2, 2: 2, 5: 2, 1: 1, 4: 1})
print(c)