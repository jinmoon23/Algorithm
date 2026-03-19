function solution(info, edges) {
    const n = info.length;
    const relation = Array.from({ length : n }, () => []);
    for (let i = 0; i < edges.length; i++) {
        const p = edges[i][0], c = edges[i][1];
        relation[p].push(c);
    }
    let maxSheepCount = 0;
    const q = [];
    q.push([0,1,0, new Set()]) // 시작 노드, 양의 수, 늑대의 수, 후보노드집합
    
    while (q.length > 0) {
        const [start, sheepCount, wolfCount, candidates] = q.shift();
        maxSheepCount = Math.max(maxSheepCount, sheepCount);
        
        const nextNodes = relation[start];
        for (const node of nextNodes) candidates.add(node);
        for (const next of candidates) {
            // 후보 노드의 값이 1(늑대)이면
            if (info[next]) {
                if (sheepCount > wolfCount + 1) {
                    const newCandidates = new Set(candidates);
                    newCandidates.delete(next);
                    q.push([next, sheepCount, wolfCount + 1, newCandidates]);
                }
            } else {
                const newCandidates = new Set(candidates);
                newCandidates.delete(next);
                q.push([next, sheepCount + 1, wolfCount, newCandidates]);
            }
        }
        
    }
    return maxSheepCount;
}