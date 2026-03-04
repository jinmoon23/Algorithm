# 각 노드를 방문할 때 마다 해당 노드에 있던 양과 늑대가 당신을 따라오게 됩니다.
# 당신이 모은 양의 수보다 늑대의 수가 같거나 더 많아지면 바로 모든 양을 잡아먹어 버립니다.
# 중간에 양이 늑대에게 잡아먹히지 않도록 하면서 최대한 많은 수의 양을 모아서 다시 루트 노드로 돌아오려 합니다.
# 인접한 노드 방문 -> BFS 활용

from collections import deque

def solution(info, edges):
    answer = 0
    # 1. edges 배열을 활용하여 info 길이를 갖는 트리 생성
    # 부모 노드를 idx로 하고 자식 노드들을 value로 가지는 트리
    n = len(info)
    relation = [[] for _ in range(n)]
    for p, c in edges: relation[p].append(c) 
    
    # 2. deque 선언
    q = deque() 
    q.append([0, 1, 0, set()]) # 현재 노드, 양의 수, 늑대의 수, 후보 노드 집합
    
    while q:
        current, sheep_count, wolf_count, candidates = q.popleft()
        
        answer = max(answer, sheep_count)
        
        # 3. 후보 노드 집합에 현재 노드에서 갈 수 있는 인접 노드 삽입
        for c in relation[current]: candidates.add(c)
        
        # 4. 후보 노드 집합을 순회하며 이동 조건을 충족하는지 판단
        for candidate in candidates:
            # 늑대인 경우
            if info[candidate]:
                # 늑대가 있는 후보 노드 이동 전 잡아먹히지 않는지 확인
                if sheep_count > wolf_count + 1:
                    new_candidates = set(candidates)
                    new_candidates.remove(candidate)
                    q.append([candidate, sheep_count, wolf_count + 1, new_candidates])
            # 양인 경우
            else:
                new_candidates = set(candidates)
                new_candidates.remove(candidate)
                q.append([candidate, sheep_count + 1, wolf_count, new_candidates])
    return answer