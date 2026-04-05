from collections import deque

def solution(maps):
    answer = 0
    n, m = len(maps), len(maps[0])
    dxy = [[0, -1], [-1, 0], [0, 1], [1, 0]]
    visited = [[0 for _ in range(m)] for _ in range(n)]
    
    q = deque()
    q.append([0, 0, 1])
    visited[0][0] = 1
    
    while (q):
        i, j, cnt = q.popleft()
        if i == n - 1 and j == m - 1: return cnt
        
        for dx, dy in dxy:
            nx, ny = i + dx, j + dy
            if nx < 0 or ny < 0 or nx >= n or ny >= m: continue
            if visited[nx][ny] == 1: continue
            if maps[nx][ny] == 0: continue
            
            q.append([nx, ny, cnt + 1])
            visited[nx][ny] = 1
            
    return -1