import java.util.List;
import java.util.ArrayList;

import java.util.Set;
import java.util.HashSet;

import java.util.Deque;
import java.util.ArrayDeque;

class State {
    int curr, sheepCount, wolfCount;
    Set<Integer> candidates;
    
    State(int curr, int sheepCount, int wolfCount, Set<Integer> candidates) {
        this.curr = curr;
        this.sheepCount = sheepCount;
        this.wolfCount = wolfCount;
        this.candidates = candidates;
    }
}

class Solution {
    public int solution(int[] info, int[][] edges) {
        int n = info.length;
        List<List<Integer>> relation = new ArrayList<>();
        for (int i = 0; i < n; i++) relation.add(new ArrayList<>());
        for (int i = 0; i < edges.length; i++) {
            int p = edges[i][0], c = edges[i][1];
            relation.get(p).add(c);
        }
        
        int maxSheepCount = 0;
        Deque<State> q = new ArrayDeque<>();
        q.addLast(new State(0, 1, 0, new HashSet<>())); // 현재노드, 양의 수, 늑대의 수, 후보노드집합
        
        while (!q.isEmpty()) {
            State s = q.pollFirst();
            int curr = s.curr, sc = s.sheepCount, wc = s.wolfCount;
            Set<Integer> candidates = s.candidates;
            
            maxSheepCount = Math.max(sc, maxSheepCount);
            
            List<Integer> nextNodes = relation.get(curr);
            
            for (int node : nextNodes) candidates.add(node);
            for (int next : candidates) {
                if (info[next] == 1) {
                    if (sc > wc + 1) {
                        Set<Integer> newCan = new HashSet<>(candidates);
                        newCan.remove(next);
                        q.addLast(new State(next, sc, wc + 1, newCan));
                    }
                } else {
                    Set<Integer> newCan = new HashSet<>(candidates);
                    newCan.remove(next);
                    q.addLast(new State(next, sc + 1, wc, newCan));
                }
            }
        }
        
        return maxSheepCount;
    }
}