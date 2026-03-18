def find(parent, i):
    if i == parent[i]: return i
    
    parent[i] = find(parent, parent[i])
    
    return parent[i]

def union(parent, rank, xroot, yroot):
    if (rank[xroot] > rank[yroot]): parent[yroot] = xroot
    elif (rank[yroot] > rank[xroot]): parent[xroot] = yroot
    else: parent[yroot] = xroot
    
    
def solution(n, costs):
    costs.sort(key = lambda x: x[2])
    
    parent, rank = [i for i in range(n)], [0 for _ in range(n)]
    
    minCost, edges = 0, 0
    
    for edge in costs:
        if edges == n - 1: break
        
        xroot, yroot = find(parent, edge[0]), find(parent, edge[1])
        if xroot != yroot:
            union(parent, rank, xroot, yroot)
            
            minCost += edge[2]
            edges += 1
    
    return minCost