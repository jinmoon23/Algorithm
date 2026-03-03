import java.util.List;
import java.util.ArrayList;

import java.util.Set;
import java.util.HashSet;

import java.util.Deque;
import java.util.ArrayDeque;

class Solution {
    // 3. State class 정의 -> 하나의 배열에 모두 같은 타입의 값만 들어가야 하기 때문에 class 활용
    public class State {
        int current, sheepCount, wolfCount;
        Set<Integer> candidates;
        
        State(int current, int sheepCount, int wolfCount, Set<Integer> candidates) {
            this.current = current;
            this.sheepCount = sheepCount;
            this.wolfCount = wolfCount;
            this.candidates = candidates;
        }
    }
    
    public int solution(int[] info, int[][] edges) {
        int answer = 0;
        // 1. info 길이를 갖는 tree 구조 정의
        int n = info.length;
        List<List<Integer>> relation = new ArrayList<>();
        for (int i = 0; i < n; i++) relation.add(new ArrayList<>());
        for (int[] edge : edges) {
            int p = edge[0], c = edge[1];
            relation.get(p).add(c);
        }
        // 2. Deque 정의
        Deque<State> q = new ArrayDeque<>();
        q.addLast(new State(0, 1, 0, new HashSet<>())); // 현재 노드, 양의 수, 늑대의 수, 진입 가능한 후보집합
        
        while (!q.isEmpty()) {
            State s = q.pollFirst();
            int current = s.current, sc = s.sheepCount, wc = s.wolfCount;
            Set<Integer> candidates = s.candidates;
            
            answer = Math.max(answer, sc);
            
            // 4. candidates 후보집합 추가
            for (int child : relation.get(current)) {
                candidates.add(child);
            }
            // 5. candidates 순회하며 갈 수 있는 노드인지 판단
            for (int candidate : candidates) {
                // 후보노드에 늑대가 있는 경우
                if (info[candidate] == 1) {
                    if (sc > wc + 1) {
                        Set<Integer> newCandidates = new HashSet<>(candidates);
                        newCandidates.remove(candidate);
                        q.addLast(new State(candidate, sc, wc + 1, newCandidates));
                    }
                // 후보노드에 양이 있는 경우
                } else {
                    Set<Integer> newCandidates = new HashSet<>(candidates);
                    newCandidates.remove(candidate);
                    q.addLast(new State(candidate, sc + 1, wc, newCandidates));
                }
            }
        }                  
        return answer;
    }
}