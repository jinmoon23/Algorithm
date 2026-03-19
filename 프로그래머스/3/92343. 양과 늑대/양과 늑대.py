from collections import deque

def solution(info, edges):
    answer = 0
    n = len(info)
    relation = [[] for _ in range(n)];
    for p,c in edges:
        relation[p].append(c)
    
    max_sheep = 0
    q = deque()
    q.append([0, 1, 0, set()])
    
    while (q):
        curr, sheep_count, wolf_count, candidates = q.popleft()
        max_sheep = max(max_sheep, sheep_count)
        
        next_nodes = relation[curr]
        for node in next_nodes: candidates.add(node)
        for nextNode in candidates:
            if (info[nextNode]):
                if (sheep_count > wolf_count + 1):
                    newCan = set(candidates)
                    newCan.remove(nextNode)
                    q.append([nextNode, sheep_count, wolf_count + 1, newCan])
            else:
                newCan = set(candidates)
                newCan.remove(nextNode)
                q.append([nextNode, sheep_count + 1, wolf_count, newCan])
                    
    return max_sheep