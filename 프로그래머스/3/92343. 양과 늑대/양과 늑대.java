import java.util.ArrayList;
import java.util.List;
import java.util.Deque;
import java.util.ArrayDeque;
import java.util.Set;
import java.util.HashSet;


// 당신이 모은 양의 수보다 늑대의 수가 같거나 더 많아지면 바로 모든 양을 잡아먹어 버립니다.
// 중간에 양이 늑대에게 잡아먹히지 않도록 하면서 최대한 많은 수의 양을 모아서 다시 루트 노드로 돌아오려 합니다.
class Solution {
    // 3. State class 정의
    public class State {
        int current;
        int sheepCount;
        int wolfCount;
        Set<Integer> availables;
        
        State(int current, int sheepCount, int wolfCount, Set<Integer> availables) {
            this.current = current;
            this.sheepCount = sheepCount;
            this.wolfCount = wolfCount;
            this.availables = availables;
        }
    }
    
    public int solution(int[] info, int[][] edges) {
        int answer = 0;
        // 1. info 길이를 갖는 relation 배열 생성
        int n = info.length;
        List<List<Integer>> relation = new ArrayList<>();
        for (int i = 0; i < n; i++) relation.add(new ArrayList<>());
        
        for (int[] edge : edges) {
            int p = edge[0], c = edge[1];
            relation.get(p).add(c);
        }
        System.out.println(relation);
        
        // 2. maxSheep 설정
        int maxSheep = 0;
        
        // 4. Deque 설정
        Deque<State> q = new ArrayDeque<>();
        q.addLast(new State(0, 1, 0, new HashSet<>()));
        
        // 5. BFS
        while (!q.isEmpty()) {
            State s = q.pollFirst();
            int current = s.current, sc = s.sheepCount, wc = s.wolfCount;
            Set<Integer> availables = s.availables;
            
            maxSheep = Math.max(maxSheep, sc);
            
            // 6. availables Set에 후보 노드 추가
            for (int child : relation.get(current)) {
                availables.add(child);
            }
            
            // 7. availables Set 순회하며 갈 수 있는 노드인지 판단
            for (int next : availables) {
                // 후보 노드가 늑대인 경우
                if (info[next] == 1) {
                    // 이동이 가능한 노드인 경우
                    if (sc > wc + 1) {
                        Set<Integer> newAvailables = new HashSet<>(availables);
                        newAvailables.remove(next);
                        q.addLast(new State(next, sc, wc + 1, newAvailables));
                    }
                // 후보 노드가 양인 경우    
                } else {
                    Set<Integer> newAvailables = new HashSet<>(availables);
                    newAvailables.remove(next);
                    q.addLast(new State(next, sc + 1, wc, newAvailables));
                }    
            }
            
        }
        return maxSheep;
    }
}