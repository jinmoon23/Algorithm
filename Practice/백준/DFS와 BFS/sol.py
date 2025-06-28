from collections import deque
import sys
sys.stdin = open("input.txt", "r")

N, M, start = map(int,input().split())
lines = [list(map(int,input().split())) for _ in range(M)]
routes = [[] for _ in range(N + 1)]
visited = [0 for _ in range(N + 1)]
b_visited = [0 for _ in range(N + 1)]

# routes 배열을 [[], [2, 3, 4], [1, 4], [1, 4], [1, 2, 3]] 형태로 만들어 줌. 1번 노드와 연결된 노드는 2,3,4 노드라는 의미.
for index, value in lines:
    routes[index].append(value)
    routes[value].append(index)
print(routes)
def dfs(s, path):
    visited[s] = 1
    # 가능하다면 작은 노드부터 방문하라고 한 문제의 조건 준수를 위한 소팅
    routes[s].sort()
    for new_start in routes[s]:
        if visited[new_start] != 1:
            path.append(new_start)
            # 간선 이동을 위한 재귀호출
            dfs(new_start, path)
    answer_path = list(map(str, path))
    return ' '.join(answer_path)

q = deque()

def bfs(s):
    path = []
    b_visited[s] = 1
    q.append(s)
    while q:
        b_start = q.popleft()
        path.append(b_start)
        routes[b_start].sort()
        for node in routes[b_start]:
            if b_visited[node] != 1:
                b_visited[node] = 1
                q.append(node)
    answer_path = list(map(str, path))
    return ' '.join(answer_path)

print(dfs(start, [start]))
print(bfs(start))
