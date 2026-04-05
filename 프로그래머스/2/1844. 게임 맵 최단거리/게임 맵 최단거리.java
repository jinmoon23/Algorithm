import java.util.Deque;
import java.util.ArrayDeque;

class Solution {
    static class Q {
        int i, j, cnt;
        
        Q(int i, int j, int cnt) {
            this.i = i;
            this.j = j;
            this.cnt = cnt;
        }
    }
    public int solution(int[][] maps) {
        int answer = 0;
        int n = maps.length, m = maps[0].length;
        
        int[][] visited = new int[n][m];
        int[][] dxy = {{0,-1}, {-1,0}, {0,1}, {1,0}}; // 좌상우하
        
        Deque<Q> q = new ArrayDeque<>();
        q.addLast(new Q(0, 0, 1));
        visited[0][0] = 1;
        
        while(!q.isEmpty()) {
            Q popped = q.pollFirst();
            int i = popped.i, j = popped.j, cnt = popped.cnt;
            if (i == n - 1 && j == m - 1) return cnt;
            
            for (int[] delta : dxy) {
                int nx = i + delta[0], ny = j + delta[1];
                if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
                if (visited[nx][ny] == 1) continue;
                if (maps[nx][ny] == 0) continue;
                
                q.addLast(new Q(nx, ny, cnt + 1));
                visited[nx][ny] = 1;
            }
        }
        return -1;
    }
}