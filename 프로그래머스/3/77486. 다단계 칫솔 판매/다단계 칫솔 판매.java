import java.util.Map;
import java.util.HashMap;

class Solution {
    public int[] solution(String[] enroll, String[] referral, String[] seller, int[] amount) {
        int[] answer = new int[enroll.length];
        
        Map<String, String> root = new HashMap<>();
        for (int i = 0; i < referral.length; i++) {
            root.put(enroll[i], referral[i]);
        }
        
        Map<String, Integer> profit = new HashMap<>();
        for (int i = 0; i < enroll.length; i++) {
            profit.put(enroll[i], 0);
        }
        
        for (int i = 0; i < seller.length; i++) {
            int money = amount[i] * 100;
            String sender = seller[i];
            
            while (money > 0 && !sender.equals("-")) {
                String receiver = root.get(sender);
                profit.put(sender, profit.get(sender) + money - money / 10);
                money = money / 10;
                sender = receiver;
            }
        }
        for (int i = 0; i < enroll.length; i++) {
            answer[i] = profit.get(enroll[i]);
        }
        
        return answer;
    }
}