function solution(maps) {
    const n = maps.length, m = maps[0].length;
    
    function bfs(i, j) {
        const dxy = [[0,-1], [-1,0], [0,1], [1,0]]; // 좌,상,우,하
        const q = [];
        q.push([i, j, 1]);
        const visited = Array.from({ length: n }, () => Array(m).fill(0));
        visited[i][j] = 1;
        
        while (q.length > 0) {
            const [x, y, c] = q.shift();
            if (x === n - 1 && y === m - 1) return c;
            
            for (const [dx, dy] of dxy) {
                const nx = x + dx, ny = y + dy;
                if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
                if (visited[nx][ny] === 1) continue;
                if (maps[nx][ny] === 0) continue;
                
                q.push([nx, ny, c + 1]);
                visited[nx][ny] = 1;
            }
        }
        return -1;
    }
    return bfs(0,0);
}