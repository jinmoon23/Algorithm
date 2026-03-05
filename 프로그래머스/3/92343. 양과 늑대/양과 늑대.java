import java.util.List;
import java.util.ArrayList;

import java.util.Deque;
import java.util.ArrayDeque;

import java.util.Set;
import java.util.HashSet;

class State {
    int current, sheepCount, wolfCount;
    Set<Integer> candidates;
    
    State(int current, int sc, int wc, Set<Integer> candidates) {
        this.current = current;
        this.sheepCount = sc;
        this.wolfCount = wc;
        this.candidates = candidates;
    }
}

class Solution {
    public int solution(int[] info, int[][] edges) {
        int answer = 0;
        int n = info.length;
        List<List<Integer>> relation = new ArrayList<>();
        for (int i = 0; i < n; i++) relation.add(new ArrayList<>());
        
        for (int[] edge : edges) {
            int p = edge[0], c = edge[1];
            relation.get(p).add(c);
        }
        
        Deque<State> q = new ArrayDeque<>();
        q.addLast(new State(0, 1, 0, new HashSet<>()));
        
        while (!q.isEmpty()) {
            State s = q.pollFirst();
            int current = s.current, sc = s.sheepCount, wc = s.wolfCount;
            Set<Integer> candidates = s.candidates;
            
            answer = Math.max(answer, sc);
            
            // candidates 후보 집합에 노드 넣기
            // relation.get(current) = currnet 노드의 자식 노드 배열
            for (int candidate : relation.get(current)) {
                candidates.add(candidate);
            }
            
            for (int candidate : candidates) {
                // 늑대인 경우
                if (info[candidate] == 1) {
                    if (sc > wc + 1) {
                        Set<Integer> newCandidates = new HashSet<>(candidates);
                        newCandidates.remove(candidate);
                        q.addLast(new State(candidate, sc, wc + 1, newCandidates));    
                    }
                // 양인 경우
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