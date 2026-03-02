import java.util.Deque;
import java.util.ArrayDeque;

class Solution {
    public int bfs(String[] maps, int si, int sj, char target, int row, int col) {
        int[][] dxy = {{0,-1}, {-1,0}, {0,1}, {1,0}}; //좌상우하
        int[][] visited = new int[row][col];
        Deque<int[]> q = new ArrayDeque<>();
        
        q.addLast(new int[]{si, sj, 0});
        visited[si][sj] = 1;
        
        while (!q.isEmpty()) {
            int[] leftPopped = q.pollFirst();
            int i = leftPopped[0], j = leftPopped[1], d = leftPopped[2];
            
            if (maps[i].charAt(j) == target) return d;
            
            for (int[] dir : dxy) {
                int nx = i + dir[0], ny = j + dir[1];
                if (nx < 0 || ny < 0 || nx >= row || ny >= col) continue;
                if (maps[nx].charAt(ny) == 'X') continue;
                if (visited[nx][ny] == 1) continue;
                
                visited[nx][ny] = 1;
                q.addLast(new int[]{nx, ny, d + 1});
            }
        }
        return -1;
    }
    public int solution(String[] maps) {
        int answer = 0;
        int row = maps.length;
        int col = maps[0].length();
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
        
        int d1 = bfs(maps, si, sj, 'L', row, col);
        if (d1 == -1) return -1;
        int d2 = bfs(maps, li, lj, 'E', row, col);
        if (d2 == -1) return -1;
        
        return d1 + d2;
    }
}