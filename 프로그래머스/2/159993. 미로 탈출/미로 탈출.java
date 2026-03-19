import java.util.Deque;
import java.util.ArrayDeque;

class Solution {
    public int bfs(int i, int j, char target, String[] maps) {
        int n = maps.length, m = maps[0].length();
        int[][] visited = new int[n][m];
        int[][] dxy = {{0,-1},{-1,0},{0,1},{1,0}}; // 좌상우하
        Deque<int[]> q = new ArrayDeque<>();
        q.addLast(new int[]{i,j,0});
        visited[i][j] = 1;
        
        while(!q.isEmpty()) {
            int[] poped = q.pollFirst();
            int x = poped[0], y = poped[1], c = poped[2];
            if (maps[x].charAt(y) == target) return c;
            for (int[] dir : dxy) {
                int dx = dir[0], dy = dir[1];
                int nx = x + dx, ny = y + dy;
                if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
                if (visited[nx][ny] == 1) continue;
                if (maps[nx].charAt(ny) == 'X') continue;
                
                q.addLast(new int[]{nx, ny, c + 1});
                visited[nx][ny] = 1;
            }
            
        }
        return -1;
    }
    public int solution(String[] maps) {
        int answer = 0;
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
        int c1 = bfs(si, sj, 'L', maps), c2 = bfs(li, lj, 'E', maps);
        if (c1 == -1) return -1; if (c2 == -1) return -1;
        return c1 + c2;
    }
}