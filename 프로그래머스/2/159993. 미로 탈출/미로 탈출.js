// 출발 지점에서 먼저 레버가 있는 칸으로 이동하여 레버를 당긴 후 미로를 빠져나가는 문이 있는 칸으로 이동하면 됩니다.
// 최대한 빠르게 미로를 빠져나가는데 걸리는 시간을 구하려 합니다. -> BFS
function solution(maps) {
    var answer = 0;
    const n = maps.length, m = maps[0].length;
    // 1. 각 시작 지점별 좌표 초기화
    let si = -1, sj = -1, li = -1, lj = -1;
    
    // 2. maps 중첩 배열 순회하며 각 시작 지점별 좌표 찾아 재할당
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (maps[i][j] === 'S') {
                si = i; 
                sj = j;   
            }
            if (maps[i][j] === 'L') {
                li = i;
                lj = j;   
            }
        }
    }
    //3. bfs 탐색 함수 정의
    function bfs(si, sj, target) {
        const visited = Array.from({ length : n }, () => Array(m).fill(0));
        const delta = [[0,-1], [-1,0], [0,1], [1,0]] // 좌상우하
        const q = [];
        q.push([si, sj, 0]); // 0은 길이
        visited[si][sj] = 1;
        
        while(q.length) {
            const [i, j, d] = q.shift();
            // target 찾으면 길이 반환
            if (maps[i][j] === target) return d;
            
            // delta 순회하며 인접 격자칸 q에 담기
            for (const [dx, dy] of delta) {
                const nx = i + dx, ny = j + dy;
                
                if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
                if (maps[nx][ny] === 'X') continue;
                if (visited[nx][ny]) continue;
                
                visited[nx][ny] = 1;
                q.push([nx, ny, d + 1]);
            }
        }
        return -1;
    }
    let d1 = bfs(si, sj, 'L');
    if (d1 === -1) return -1;
    let d2 = bfs(li, lj, 'E');
    if (d2 === -1) return -1;
    
    return d1 + d2;
}