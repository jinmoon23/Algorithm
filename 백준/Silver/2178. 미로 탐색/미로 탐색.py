from collections import deque
N, M = list(map(int,input().split()))
maze = [input() for _ in range(N)]
visited = [[0] * M for _ in range(N)]
delta = [[0,-1],[-1,0],[0,1],[1,0]]

def solution(N, M):
    q = deque()
    q.append([0,0,1])
    # 시작점 방문체크
    visited[0][0] = 1
    while q:
        row, col, counter = q.popleft()
        if row == N - 1 and col == M - 1:
            return counter
        for dx,dy in delta:
            nx, ny = row + dx, col + dy
            if nx < 0 or ny < 0 or nx >= N or ny >= M: continue
            if maze[nx][ny] == '0' or visited[nx][ny] == 1: continue
            # q 삽입 시점에 방문체크
            visited[nx][ny] = 1
            q.append([nx,ny,counter + 1])

print(solution(N,M))