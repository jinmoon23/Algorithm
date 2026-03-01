import java.util.Map;
import java.util.HashMap;

class Solution {
    public int[] solution(String[] enroll, String[] referral, String[] seller, int[] amount) {
        int[] answer = new int[enroll.length];
        
        HashMap<String, String> relation = new HashMap<>();
        for (int i = 0; i < enroll.length; i++) {
            relation.put(enroll[i], referral[i]);
        }
        
        HashMap<String, Integer> total = new HashMap<>();
        for (int i = 0; i < enroll.length; i++) {
            total.put(enroll[i], 0);
        }
        
        for (int i = 0; i < seller.length; i++) {
            int money = amount[i] * 100;
            String currSender = seller[i];
            
            while (!currSender.equals("-") && money > 0) {
                int share = money / 10;
                String nextSender = relation.get(currSender);
                total.put(currSender, total.get(currSender) + (money - share));
                
                money = share;
                currSender = nextSender;
            }
        }
        for (int i = 0; i < enroll.length; i++) {
            answer[i] = total.get(enroll[i]);
        }
        
        return answer;
    }
}