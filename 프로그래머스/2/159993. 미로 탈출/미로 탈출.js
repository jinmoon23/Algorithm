// 출발 지점에서 먼저 레버가 있는 칸으로 이동하여 레버를 당긴 후 미로를 빠져나가는 문이 있는 칸으로 이동하면 됩니다
function solution(maps) {
    const row = maps.length;
    const col = maps[0].length;
    const delta = [[0,-1], [-1,0],[0,1],[1,0]] // 좌상우하
    
    let si, sj, li, lj;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (maps[i][j] === "S") {si = i, sj = j};
            if (maps[i][j] === "L") {li = i, lj = j};
        }
    }
    const d1 = bfs(si, sj, "L")
    if (d1 === -1) return -1;
    const d2 = bfs(li, lj, "E")
    if (d2 === -1) return -1;
    
    return d1 + d2;
    
    function bfs(si, sj, target) {
        const visited = new Array(maps.length).fill(0).map(() => new Array(maps[0].length).fill(0))
        const q = [[si, sj, 0]];
        visited[si][sj] = 1;
        
        while (q.length) {
            const [i, j, d] = q.shift();
            if (maps[i][j] === target) return d;
            
            for (const [dx, dy] of delta) {
                const nx = i + dx;
                const ny = j + dy;
                if (nx < 0 || ny < 0 || nx >= maps.length || ny >= maps[0].length) continue;
                if (visited[nx][ny] === 1) continue
                if (maps[nx][ny] === "X") continue
                
                visited[nx][ny] = 1
                q.push([nx, ny, d + 1]);
            }
        }
        return -1;
    }
}