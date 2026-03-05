from collections import deque


def solution(maps):
    n, m = len(maps), len(maps[0])
    si, sj, ni, nj = -1, -1, -1, -1
    for i in range(n):
        for j in range(m):
            if maps[i][j] == 'S': si, sj = i, j
            if maps[i][j] == 'L': li, lj = i, j
    
    def bfs(si, sj, target):
        delta = [[0,-1], [-1,0], [0,1], [1,0]] # 좌상우하
        visited = [[0 for _ in range(m)] for _ in range(n)]
        q = deque()
        q.append([si, sj, 0])
        
        while q:
            i, j, d = q.popleft()
            
            if maps[i][j] == target: return d
            
            for dx, dy in delta:
                nx, ny = i + dx, j + dy
                
                if nx < 0 or ny < 0 or nx >= n or ny >= m: continue
                if maps[nx][ny] == 'X': continue
                if visited[nx][ny]: continue
                
                visited[nx][ny] = 1
                q.append([nx, ny, d + 1])
        return -1
    
    d1, d2 = bfs(si, sj, 'L'), bfs(li, lj, 'E')
    if d1 == -1: return -1
    if d2 == -1: return -1
    
    return d1 + d2