import java.util.Deque;
import java.util.ArrayDeque;

class Solution {
    class Q {
        int x, y, c;
        
        Q(int x, int y, int c) {
            this.x = x;
            this.y = y;
            this.c = c;
        }
    }
    
    public int bfs(int[][] maps, int n, int m, int si, int sj) {
        int[][] dxy = {{0,-1}, {-1,0}, {0,1}, {1,0}}; // 좌,상,우,하
        int[][] visited = new int[n][m];
        
        Deque<Q> q = new ArrayDeque<>();
        q.addLast(new Q(si, sj, 1));
        visited[si][sj] = 1;
        
        while (!q.isEmpty()) {
            Q poped = q.pollFirst();
            int x = poped.x, y = poped.y, c = poped.c;
            if (x == n - 1 && y == m - 1) return c;
            
            for (int[] d : dxy) {
                int dx = d[0], dy = d[1];
                int nx = x + dx, ny = y + dy;
                if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
                if (visited[nx][ny] == 1) continue;
                if (maps[nx][ny] == 0) continue;
                
                q.addLast(new Q(nx, ny, c + 1));
                visited[nx][ny] = 1;
            }
        }
        return -1;
        
    }
    public int solution(int[][] maps) {
        int n = maps.length, m = maps[0].length;
        return bfs(maps, n, m, 0, 0);
    }
}