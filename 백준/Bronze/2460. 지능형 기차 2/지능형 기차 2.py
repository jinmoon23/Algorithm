STATION = 10

max_people = 0
current_people = 0

for _ in range(STATION):
    out_p, in_p = map(int, input().split())
    current_people += in_p - out_p
    if current_people > max_people:
        max_people = current_people
print(max_people)
