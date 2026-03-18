def find(parent, x):
    if x == parent[x]: return x
    
    parent[x] = find(parent, parent[x])
    return parent[x]

def union(parent, rank, xroot, yroot):
    if rank[xroot] > rank[yroot]:
        parent[yroot] = xroot
    elif rank[yroot] > rank[xroot]:
        parent[xroot] = yroot
    else:
        parent[yroot] = xroot
        rank[xroot] += 1
    
def solution(n, costs):
    costs.sort(key = lambda x: x[2])
    
    parent, rank = [i for i in range(n)], [0 for _ in range(n)]
    minCost, edges = 0, 0
    
    for edge in costs:
        xroot, yroot = find(parent, edge[0]), find(parent, edge[1])
        
        if xroot != yroot:
            union(parent, rank, xroot, yroot)
            minCost += edge[2]
            edges += 1
    
    return minCost