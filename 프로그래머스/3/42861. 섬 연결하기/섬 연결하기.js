function find(parent, x) {
    if (x === parent[x]) return x;
    
    parent[x] = find(parent, parent[x]);
    
    return parent[x];
}

function union(parent, rank, xroot, yroot) {
    // 랭크가 더 큰 루트로 합치기
    if (rank[xroot] > rank[yroot]) {
        parent[yroot] = xroot;
    } else if (rank[yroot] > rank[xroot]) {
        parent[xroot] = yroot;
    // 랭크가 같으면 임의의 노드를 루트로 합치기
    } else {
        parent[yroot] = xroot;
        rank[xroot] += 1;
    }
}
function solution(n, costs) {
    // 1. 최소 비용을 위해 costs 오름차순 정렬
    costs.sort((a,b) => a[2] - b[2]);
    // 2. parent와 rank 초기화
    const parent = Array.from({length:n}, (_, i) => i);
    const rank = Array(n).fill(0);
    
    // 반환값
    let minCost = 0;
    // edges가 n - 1 이 될 때까지 순회할 예정
    let edges = 0;
    
    for (const edge of costs) {
        if (edges === n - 1) break;
        // 각 노드의 루트 찾기
        const x = find(parent, edge[0]);
        const y = find(parent, edge[1]);
        // 각 노드의 루트가 서로 다르면 연결되어 있지 않음을 의미
        // 루트 기준 결합(union)해서 노드 연결
        if (x !== y) {
            union(parent, rank, x, y);
            minCost += edge[2];
            edges += 1;
        }
    }
    return minCost;
}