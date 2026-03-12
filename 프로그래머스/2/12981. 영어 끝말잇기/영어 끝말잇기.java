import java.util.Set;
import java.util.HashSet;

class Solution {
    public int[] solution(int n, String[] words) {
        Set<String> usedWords = new HashSet<>();
        usedWords.add(words[0]);
        for (int i = 1; i < words.length; i++) {
            String prevWord = words[i - 1];
            String currWord = words[i];
            char tail = prevWord.charAt(prevWord.length() - 1);
            char head = currWord.charAt(0);
            
            if (tail != head || usedWords.contains(currWord)) {
                int player = (i % n) + 1;
                int turn = (i / n) + 1;
                int[] result = new int[2];
                result[0] = player; result[1] = turn;
                return result;
            }
            usedWords.add(currWord);
        }
        
        return new int[2];
    }
}