from collections import deque

def solution(info, edges):
    answer = 0
    n = len(info)
    relation = [[] for _ in range(n)]
    for p,c in edges:
        relation[p].append(c)
        
    q = deque()
    q.append([0, 1, 0, set()])
    
    while q:
        current, sheep_count, wolf_count, candidates = q.popleft()
        
        answer = max(answer, sheep_count)
        
        for c in relation[current]:
            candidates.add(c)
            
        for c in candidates:
            if (info[c]):
                if (sheep_count > wolf_count + 1):
                    new_candidates = set(candidates)
                    new_candidates.remove(c)
                    q.append([c, sheep_count, wolf_count + 1, new_candidates])
            else:
                new_candidates = set(candidates)
                new_candidates.remove(c)
                q.append([c, sheep_count + 1, wolf_count, new_candidates])
    return answer