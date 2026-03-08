function solution(info, edges) {
    var answer = 0;
    // 1. info 길이를 갖는 트리 edges 활용해서 생성
    const n = info.length;
    const relation = Array.from({ length : n }, () => [])
    for (const [p, c] of edges) {
        relation[p].push(c);
    }
    // 2. 인접 노드 탐색을 위한 큐 생성
    const q = [];
    q.push([0, 1, 0, new Set()]); // 현재 노드, 양의 수, 늑대의 수, 이동 가능 후보 집합
    
    // 3. bfs 탐색
    while (q.length) {
        const [current, sheepCount, wolfCount, candidates] = q.shift();
        answer = Math.max(answer, sheepCount);
        
        // 4. candidates 집합에 후보 노드 삽입
        // current 변수를 활용해 relation[current]로 이동 가능 후보 노드에 접근
        for (const candidate of relation[current]) {
            candidates.add(candidate);
        }
        // 5. candidates 집합 순회하며 양과 늑대 판단
        for (const next of candidates) {
            // 늑대인 경우
            if (info[next]) {
                if (sheepCount > wolfCount + 1) {
                    const newCandidates = new Set(candidates);
                    newCandidates.delete(next);
                    q.push([next, sheepCount, wolfCount + 1, newCandidates]);
                }
            // 양인 경우
            } else {
                const newCandidates = new Set(candidates);
                newCandidates.delete(next);
                q.push([next, sheepCount + 1, wolfCount, newCandidates]);
            }
        }
    }
    return answer;
}