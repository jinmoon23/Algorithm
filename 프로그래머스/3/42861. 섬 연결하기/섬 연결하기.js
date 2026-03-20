function find(parent, i) {
    if (i === parent[i]) return i;
    
    parent[i] = find(parent, parent[i]);
    
    return parent[i];
}

function union(parent, rank, xroot, yroot) {
    if (rank[xroot] > rank[yroot]) parent[yroot] = xroot;
    else if (rank[yroot] > rank[xroot]) parent[xroot] = yroot;
    else {
        rank[xroot] += 1;
        parent[yroot] = xroot;
    }
}

function solution(n, costs) {
    var answer = 0;
    
    costs.sort((a, b) => a[2] - b[2]);
     
    const parent = Array.from({ length: n }, (_, i) => i);
    const rank = Array(n).fill(0);
    
    let minCost = 0, edges = 0;
    
    for (const edge of costs) {
        if (edges === n - 1) break;
        const xroot = find(parent, edge[0]);
        const yroot = find(parent, edge[1]);
        
        if (xroot !== yroot) {
            union(parent, rank, xroot, yroot);
            minCost += edge[2];
            edges += 1;
        }
    }
    return minCost;
}