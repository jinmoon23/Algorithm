from collections import deque

def solution(maps):
    row = len(maps)
    col = len(maps[0])
    si = sj = li = lj = -1
    
    for i in range(0, row):
        for j in range(0, col):
            if (maps[i][j] == "S"):
                si, sj = i, j
            if (maps[i][j] == "L"):
                li, lj = i, j
    
    def bfs(start, end, target):
        delta = [[0,-1], [-1,0], [0,1], [1,0]] # 좌상우하
        visited = [[0 for _ in range(col)] for _ in range(row)]
        q = deque([[start, end, 0]])
        visited[start][end] = 1
        
        while (q):
            i, j, d = q.popleft()
            if (maps[i][j] == target): return d
            
            for dx, dy in delta:
                nx, ny = i + dx, j + dy
                
                if (nx < 0 or ny < 0 or nx >= row or ny >= col): continue
                if (visited[nx][ny] == 1): continue
                if (maps[nx][ny] == "X"): continue
                
                visited[nx][ny] = 1
                q.append([nx, ny, d + 1])
        
        return -1
    
    d1 = bfs(si, sj, "L")
    if d1 == -1: return -1
    d2 = bfs(li, lj, "E")
    if d2 == -1: return -1
    
    return d1 + d2