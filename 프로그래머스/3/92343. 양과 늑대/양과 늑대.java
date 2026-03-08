import java.util.List;
import java.util.ArrayList;

import java.util.Deque;
import java.util.ArrayDeque;

import java.util.Set;
import java.util.HashSet;

class State {
    int current, sheepCount, wolfCount;
    Set<Integer> candidates;
    
    State(int current, int sheepCount, int wolfCount, Set<Integer> candidates) {
        this.current = current;
        this.sheepCount = sheepCount;
        this.wolfCount = wolfCount;
        this.candidates = candidates;
    }
}

class Solution {
    public int solution(int[] info, int[][] edges) {
        int answer = 0;
        // 1.
        int n = info.length;
        List<List<Integer>> relation = new ArrayList<>();
        for (int i = 0; i < n; i++) relation.add(new ArrayList<>());
        for (int[] edge : edges) {
            int p = edge[0], c = edge[1];
            relation.get(p).add(c);
        }
        // 2.
        Deque<State> q = new ArrayDeque<>();
        q.addLast(new State(0,1,0,new HashSet<>()));
        
        while (!q.isEmpty()) {
            State s = q.pollFirst();
            int current = s.current, sc = s.sheepCount, wc = s.wolfCount;
            Set<Integer> candidates = s.candidates;
            
            answer = Math.max(answer, sc);
            
            for (int candidate : relation.get(current)) {
                candidates.add(candidate);
            }
            
            for (int next : candidates) {
                // 늑대
                if (info[next] == 1) {
                    if (sc > wc + 1) {
                        Set<Integer> newCandi = new HashSet<>(candidates);
                        newCandi.remove(next);
                        q.addLast(new State(next, sc, wc + 1, newCandi));
                    }
                // 양
                } else {
                    Set<Integer> newCandi = new HashSet<>(candidates);
                    newCandi.remove(next);
                    q.addLast(new State(next, sc + 1, wc, newCandi));
                }
            }
        }
        return answer;
    }
}