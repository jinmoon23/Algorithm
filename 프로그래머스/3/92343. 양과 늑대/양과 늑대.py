from collections import deque

def solution(info, edges):
    answer = 0
    n = len(info)
    relation = [[] for _ in range(n)]
    for p, c in edges: relation[p].append(c)
    
    q = deque()
    q.append([0, 1, 0, set()])
    
    while q:
        curr_node, sheep_count, wolf_count, candidates = q.popleft()
        
        answer = max(answer, sheep_count)
        
        for candidate in relation[curr_node]: candidates.add(candidate)
        
        for next_node in candidates:
            if info[next_node]:
                if sheep_count > wolf_count + 1:
                    new_candidates = set(candidates)
                    new_candidates.remove(next_node)
                    q.append([next_node, sheep_count, wolf_count + 1, new_candidates])
            else:
                new_candidates = set(candidates)
                new_candidates.remove(next_node)
                q.append([next_node, sheep_count + 1, wolf_count, new_candidates])
    return answer