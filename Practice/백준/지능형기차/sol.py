import sys
sys.stdin = open("input.txt")
STATION = 10

net_people = []
for _ in range(STATION):
    out_p, in_p = map(int, input().split())
    net_people.append(in_p - out_p)

max_station_people = net_people[0]
compare_number = 0

for i in range(STATION):
    if i - 1 < 0:
        compare_number = net_people[i]
    else:
        compare_number += net_people[i]
    if compare_number > max_station_people:
        max_station_people = compare_number
print(max_station_people)