// Start -> Lever -> End
function solution(maps) {
    var answer = 0;
    const [row, col] = [maps.length, maps[0].length];
    let si = -1, sj = -1 , li = -1, lj = -1;
    
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (maps[i][j] === "S") si = i, sj = j;
            if (maps[i][j] === "L") li = i, lj = j;
        }
    }
    function bfs(si, sj, target) {
        // const visited = new Array(row).fill(0).map((_) => new Array(col).fill(0));
        const visited = Array.from({ length: row }, () => Array(col).fill(0));
        console.log(visited);
        const q = [];
        const dxy = [[0,-1], [-1,0], [0,1], [1,0]] // 좌상우하
        q.push([si, sj, 0]);
        visited[si][sj] = 1;
        
        while (q.length) {
            const [i, j, d] = q.shift();
            
            if (maps[i][j] === target) return d;
            
            for (const [dx, dy] of dxy) {
                const nx = i + dx, ny = j + dy;
                if (nx < 0 || ny < 0 || nx >= row || ny >= col) continue;
                if (maps[nx][ny] === "X") continue;
                if (visited[nx][ny] === 1) continue;
                
                visited[nx][ny] = 1;
                q.push([nx, ny, d + 1]);
            }
        }
        return -1;
    }
    
    const d1 = bfs(si, sj, "L");
    if (d1 === -1) return -1;
    const d2 = bfs(li, lj, "E");
    if (d2 === -1) return -1;
    
    return d1 + d2;
}