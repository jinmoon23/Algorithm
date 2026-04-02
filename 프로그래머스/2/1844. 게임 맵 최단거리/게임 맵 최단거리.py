from collections import deque

def solution(maps):
    n, m = len(maps), len(maps[0])
    def bfs(si, sj):
        dxy = [[0,-1], [-1,0], [0,1], [1,0]] # 좌,상,우,하
        visited = [[0 for _ in range(m)] for _ in range(n)]
        
        q = deque()
        q.append([si, sj, 1]) 
        visited[si][sj] = 1
        
        while (q):
            x, y, c = q.popleft()
            if x == n - 1 and y == m - 1: return c
            
            for dx, dy in dxy:
                nx, ny = x + dx, y + dy
                if nx < 0 or ny < 0 or nx >= n or ny >= m: continue
                if visited[nx][ny] == 1 or maps[nx][ny] == 0: continue
                
                q.append([nx, ny, c + 1])
                visited[nx][ny] = 1
        return -1
    return bfs(0, 0)