function solution(maps) {
    const n = maps.length, m = maps[0].length;
    
    function bfs(si, sj) {
        const dxy = [[0,-1], [-1, 0], [0, 1], [1, 0]] // 좌상우하
        const visited = Array.from({ length : n }, () => Array(m).fill(0));
        
        const q = [];
        q.push([si, sj, 1]);
        visited[si][sj] = 1;
        
        while(q.length > 0) {
            const [i, j, cnt] = q.shift();
            if (i === n - 1 && j === m - 1) return cnt;
            
            for (const [dx, dy] of dxy) {
                const nx = i + dx, ny = j + dy;
                if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
                if (visited[nx][ny] === 1) continue;
                if (maps[nx][ny] === 0) continue;
                
                q.push([nx, ny, cnt + 1]);
                visited[nx][ny] = 1;
            }
        }
        return -1;    
    }
    const result = bfs(0, 0);
    return result;
}