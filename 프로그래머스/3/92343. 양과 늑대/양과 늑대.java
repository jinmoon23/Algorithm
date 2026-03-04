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
        // 1. edges 배열을 활용해 info 길이의 트리 배열 생성
        int n = info.length;
        List<List<Integer>> relation = new ArrayList<>();
        for (int i = 0; i < n; i++) relation.add(new ArrayList<>());
        for (int[] edge : edges) {
            int p = edge[0], c = edge[1];
            relation.get(p).add(c);
        }
        
        // 2. q 선언 -> State class 선언 필요
        Deque<State> q = new ArrayDeque<>();
        q.addLast(new State(0, 1, 0, new HashSet<>()));
        
        while (!q.isEmpty()) {
            State s = q.pollFirst();
            int current = s.current, sc = s.sheepCount, wc = s.wolfCount;
            Set<Integer> candidates = s.candidates;
            
            answer = Math.max(answer, sc);
            
            // 3. current 노드로 후보 노드 집합 삽입
            for (int candidate : relation.get(current)) {
                candidates.add(candidate);
            }
            // 4. candidates Set 순회하며 조건에 부합하는 노드 찾기
            for (int candidate : candidates) {
                // 이동 할 노드가 늑대일 경우
                if (info[candidate] == 1) {
                    if (sc > wc + 1) {
                        Set<Integer> newCandidates = new HashSet<>(candidates);
                        newCandidates.remove(candidate);
                        q.addLast(new State(candidate, sc, wc + 1, newCandidates));
                    }
                // 이동 할 노드가 양일 경우      
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