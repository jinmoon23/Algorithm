import java.util.ArrayDeque;
import java.util.Deque;
import java.util.Arrays;

class Solution {
    public int bfs(String[] maps, int row, int col, int si, int sj, char target) {
        int[][] delta = {{0,-1}, {-1,0}, {0,1}, {1,0}}; // 좌상우하
        int[][] visited = new int[row][col];
        Deque<int[]> q = new ArrayDeque<>();
        q.addLast(new int[]{si, sj, 0});
        visited[si][sj] = 1;
        
        while (!q.isEmpty()) {
            int[] curr = q.pollFirst();
            int i = curr[0], j = curr[1], d = curr[2];
            
            if (maps[i].charAt(j) == target) return d;
            
            for (int[] dir : delta) {
                int nx = i + dir[0], ny = j + dir[1];
                if (nx < 0 || ny < 0 || nx >= row || ny >= col) continue;
                if (visited[nx][ny] == 1) continue;
                if (maps[nx].charAt(ny) == 'X') continue;
                
                visited[nx][ny] = 1;
                q.addLast(new int[]{nx, ny, d + 1});
            }
        }
        return -1;
    }
    public int solution(String[] maps) {
        int row = maps.length, col = maps[0].length();
        int si = -1, sj = -1, li = -1, lj = -1;
        
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                if (maps[i].charAt(j) == 'S') {
                    si = i;
                    sj = j;
                }
                if (maps[i].charAt(j) == 'L') {
                    li = i;
                    lj = j;
                }
            }
        }
        int d1 = bfs(maps, row, col, si, sj, 'L');
        if (d1 == -1) return -1;
        int d2 = bfs(maps, row, col, li, lj, 'E');
        if (d2 == -1) return -1;
        
        return d1 + d2;
    }
}