from collections import deque

def solution(maps):
    n, m = len(maps), len(maps[0])
    si, sj, li, lj = -1, -1, -1, -1
    for i in range(n):
        for j in range(m):
            if (maps[i][j] == 'S'): si, sj = i, j
            elif (maps[i][j] == 'L'): li, lj = i, j
    
    def bfs(i, j, target):
        visited = [[0 for _ in range(m)] for _ in range(n)]
        dxy = [[0,-1], [-1,0], [0,1], [1,0]] # 좌상우하
        q = deque()
        q.append([i,j,0])
        
        while(q):
            x, y, c = q.popleft()
            if (maps[x][y] == target): return c
            
            for dx, dy in dxy:
                nx, ny = x + dx, y + dy
                if nx < 0 or ny < 0 or nx >= n or ny >= m: continue
                if visited[nx][ny] == 1: continue
                if maps[nx][ny] == 'X': continue
                
                q.append([nx, ny, c + 1])
                visited[nx][ny] = 1
        return -1
    c1, c2 = bfs(si, sj, 'L'), bfs(li, lj, 'E')
    if (c1 == -1): return -1
    if (c2 == -1): return -1
    return c1 + c2