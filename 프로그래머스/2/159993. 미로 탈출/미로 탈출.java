import java.util.Deque;
import java.util.ArrayDeque;

class Solution {
    public int bfs(String[] maps, int n, int m, int si, int sj, char target) {
        int[][] delta = {{0,-1}, {-1,0}, {0,1}, {1,0}}; // 좌상우하
        int[][] visited = new int[n][m];
        Deque<int[]> q = new ArrayDeque<>();
        q.addLast(new int[]{si, sj, 0});
        visited[si][sj] = 1;
        
        while (!q.isEmpty()) {
            int[] popped = q.pollFirst();
            int i = popped[0], j = popped[1], d = popped[2];
            
            if (maps[i].charAt(j) == target) return d;
            
            for (int[] dxy : delta) {
                int dx = dxy[0], dy = dxy[1];
                int nx = i + dx, ny = j + dy;
                if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
                if (maps[nx].charAt(ny) == 'X') continue;
                if (visited[nx][ny] == 1) continue;
                
                visited[nx][ny] = 1;
                q.addLast(new int[]{nx, ny, d + 1});
            }
        }
        return -1;
    }
    
    public int solution(String[] maps) {
        int n = maps.length, m = maps[0].length();
        int si = -1, sj = -1, li = -1, lj = -1;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (maps[i].charAt(j) == 'S') {
                    si = i; sj = j;
                } else if (maps[i].charAt(j) == 'L') {
                    li = i; lj = j;
                }
            }
        }
        int d1 = bfs(maps, n, m, si, sj, 'L');
        if (d1 == -1) return -1;
        int d2 = bfs(maps, n, m, li, lj, 'E');
        if (d2 == -1) return -1;
        
        return d1 + d2;
    }
}