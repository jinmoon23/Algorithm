function solution(info, edges) {
    var answer = 0;
    // 1. info 길이를 가지는 트리를 edges 활용해서 생성
    // edges 중첩 배열은 원소가 0번 인덱스는 부모 노드, 1번 인덱스는 자식 노드
    const n = info.length;
    const relation = Array.from({ length : n }, () => []);
    for (const [p, c] of edges) {
        relation[p].push(c);
    }

    // 2. q 선언
    const q = [];
    q.push([0, 1, 0, new Set()]) // 현재 노드, 양의 수, 늑대의 수, 이동 가능한 후보 노드 집합
    
    // 3. BFS
    while (q.length) {
        let [current, sheepCount, wolfCount, candidates] = q.shift();
        
        answer = Math.max(answer, sheepCount);
        
        // 4. 후보 노드 집합에 이동이 가능한 후보 노드 삽입
        // relation[current] = current에 연결된 자식 노드 배열 접근
        for (const candidate of relation[current]) {
            candidates.add(candidate);
        }
        
        // 5. candidates 집합 순회하며 조건 판단
        for (const candidate of candidates) {
            // 후보 노드가 늑대인 경우
            if (info[candidate]) {
                if (sheepCount > wolfCount + 1) {
                    const newCandidates = new Set(candidates);
                    newCandidates.delete(candidate);
                    q.push([candidate, sheepCount, wolfCount + 1, newCandidates]);
                }
            // 후보 노드가 양인 경우    
            } else {
                const newCandidates = new Set(candidates);
                newCandidates.delete(candidate);
                q.push([candidate, sheepCount + 1, wolfCount, newCandidates]);
            }
        }
    }
    return answer;
}