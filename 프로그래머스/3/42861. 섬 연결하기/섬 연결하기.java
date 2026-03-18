import java.util.Arrays;



class Solution {
    public int find(int[] parent, int x) {
        if (x == parent[x]) return x;
        
        parent[x] = find(parent, parent[x]);
        
        return parent[x];
    }
    
    public void union(int[] parent, int[] rank, int xroot, int yroot) {
        if (rank[xroot] > rank[yroot]) {
            parent[yroot] = xroot;
        } else if (rank[yroot] > rank[xroot]) {
            parent[xroot] = yroot;
        } else {
            parent[yroot] = xroot;
            rank[xroot] += 1;
        }
    }
    public int solution(int n, int[][] costs) {
        Arrays.sort(costs, (a,b) -> a[2] - b[2]);
        
        int[] parent = new int[n]; int[] rank = new int[n];
        
        for (int i = 0; i < n; i++) {
            parent[i] = i;
            rank[i] = 0;
        }
        
        int minCost = 0;
        int edges = 0;
        
        for (int[] edge : costs) {
            int x = find(parent, edge[0]);
            int y = find(parent, edge[1]);
            
            if (x != y) {
                union(parent, rank, x, y);
                minCost += edge[2];
                edges += 1;
            }
        }
        return minCost;
    }
}