function solution(maps) {
    const n = maps.length; const m = maps[0].length;
    
    let si = -1; let sj = -1; let li = -1; let lj = -1;
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (maps[i][j] === 'S') {
                si = i; sj = j;
            } else if (maps[i][j] === 'L') {
                li = i; lj = j;
            }
        }
    }
    function bfs(i,j, target) {
        const visited = Array.from({ length : n }, () => Array(m).fill(0));
        const dxy = [[0,-1],[-1,0],[0,1],[1,0]]; // 좌상우하
        const q = [];
        q.push([i,j,0]);
        visited[i][j] = 1;
        
        while (q.length > 0) {
            const [x, y, c] = q.shift();
            if (maps[x][y] === target) return c;
            for (const [dx, dy] of dxy) {
                const nx = x + dx; const ny = y + dy;
                if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
                if (visited[nx][ny] === 1) continue;
                if (maps[nx][ny] === 'X') continue;
                
                q.push([nx, ny, c + 1]);
                visited[nx][ny] = 1;
            }
        }
        return -1
    }
    const c1 = bfs(si, sj, 'L'); 
    if (c1 === -1) return -1;
    const c2 = bfs(li, lj, 'E');
    if (c2 === -1) return -1;
    return c1 + c2;
}