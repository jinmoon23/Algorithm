// 중간에 양이 늑대에게 잡아먹히지 않도록 하면서 최대한 많은 수의 양을 모아서 다시 루트 노드로 돌아오려 합니다.
function solution(info, edges) {
    let maxSheep = 0;
    const n = info.length;
    // 부모노드를 인덱스로, 자식노드배열이 값으로 가지는 배열
    const relation = Array.from({ length : n }, () => []);
    for (const [p, c] of edges) relation[p].push(c);
    
    const q = [];
    q.push([0, 1, 0, new Set()]); // 현재 위치, 양의 수, 늑대의 수, 방문 가능한 집합
    
    while (q.length) {
        const [current, sheepCount, wolfCount, availables] = q.shift();
        
        maxSheep = Math.max(maxSheep, sheepCount);
        
        for (const next of relation[current]) {
            availables.add(next);   
        }
        
        for (const next of availables) {
            // 다음 노드가 늑대인 경우
            if (info[next]) {
                // 이전에 노드 이동이 가능했다는 것은 양의 수가 늑대보다 많았다는 의미.
                // 따라서 늑대 노드에 와서 늑대를 1 추가해도 양의 수가 많은지 확인.
                // 코드 진행이 가능하다는 것은 늑대 수를 1 추가해도 양이 더 많다는 것을 의미함.
                if (sheepCount > wolfCount + 1) {
                    const newAvailables = new Set(availables);
                    newAvailables.delete(next);
                    q.push([next, sheepCount, wolfCount + 1, newAvailables]);
                }
            // 다음 노드가 양인 경우
            } else {
                const newAvailables = new Set(availables);
                newAvailables.delete(next);
                q.push([next, sheepCount + 1, wolfCount, newAvailables]);
            }
        }
    }
    return maxSheep;
}