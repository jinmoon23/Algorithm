function find(parent, i) {
    if (i === parent[i]) return i;
    
    parent[i] = find(parent, parent[i]);
    
    return parent[i];
}

function union(parent, rank, xroot, yroot) {
    if (rank[xroot] > rank[yroot]) {
        parent[yroot] = xroot;
    } else if (rank[yroot] > rank[xroot]) {
        parent[xroot] = yroot;
    } else {
        parent[yroot] = xroot; 
    }
}

function solution(n, costs) {
    // 1. 최소 비용으로 연결하기 위해 비용 기준 sort
    costs.sort((a,b) => a[2] - b[2]);
    
    // 2. 각 노드의 부모 노드의 번호를 담은 배열 parent 초기화
    const parent = Array.from({ length : n }, (_, i) => i);
    // 3. 각 노드의 union 우선순위를 담은 배열 rank 초기화
    const rank = Array(n).fill(0);
    
    let minCost = 0
    let edges = 0
    
    for (const edge of costs) {
        // 4. 간선의 개수가 n-1이 되면 모든 노드가 연결된 상태라 순회를 중단한다
        if (edges === n - 1) break;
        // 5. 간선의 루트를 찾는다 -> 이후 연결해도 되는 노드들인지 확인하는데 활용함
        const xroot = find(parent, edge[0]);
        const yroot = find(parent, edge[1]);
        
        // 6. 서로 다른 루트라면 서로 연결되어 있지 않음을 의미. 연결하자
        if (xroot !== yroot) {
            union(parent, rank, xroot, yroot);
            minCost += edge[2];
            edges += 1;
        }
    }
    return minCost;
}