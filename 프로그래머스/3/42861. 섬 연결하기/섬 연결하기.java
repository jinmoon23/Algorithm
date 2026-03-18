import java.util.Arrays;

class Solution {
    public int find(int[] parent, int i) {
        if (i == parent[i]) return i;
        
        parent[i] = find(parent, parent[i]);
        
        return parent[i];
    }
    
    public void union(int[] parent, int[] rank, int xroot, int yroot) {
        if (rank[xroot] > rank[yroot]) {
            parent[yroot] = xroot;
        } else if (rank[yroot] > rank[xroot]) {
            parent[xroot] = yroot;
        } else {
            parent[yroot] = xroot;
        }
    }
    
    public int solution(int n, int[][] costs) {
        Arrays.sort(costs, (a, b) -> a[2] - b[2]);
        
        int[] parent = new int[n], rank = new int[n];
        for (int i = 0; i < n; i++) {
            parent[i] = i; rank[i] = 0;
        }
        
        int minCost = 0, edges = 0;
        
        for (int[] edge : costs) {
            if (edges == n - 1) break;
            
            int xroot = find(parent, edge[0]);
            int yroot = find(parent, edge[1]);
            
            if (xroot != yroot) {
                union(parent, rank, xroot, yroot);
                minCost += edge[2]; edges += 1;
            }
        }
        return minCost;
    }
}