import java.util.Map;
import java.util.HashMap;

class Solution {
    public int[] solution(String[] enroll, String[] referral, String[] seller, int[] amount) {
        int[] answer = new int[enroll.length];
        // 1. 상하관계 자료구조 설정
        HashMap<String, String> relation = new HashMap<>();
        HashMap<String, Integer> total = new HashMap<>();
        
        System.out.println(relation);
        for (int i = 0; i < enroll.length; i++) {
            relation.put(enroll[i], referral[i]);
            total.put(enroll[i], 0);    
        }
        // 2. 분배
        for (int i = 0; i < seller.length; i++) {
            int money = amount[i] * 100;
            String sender = seller[i];
            
            while (!sender.equals("-") && money > 0) {
                int share = money / 10;
                String receiver = relation.get(sender);
                total.put(sender, total.get(sender) + (money - share));
                
                sender = receiver;
                money = share;
            }
        }
        
        for (int i = 0; i < enroll.length; i++) {
            answer[i] = total.get(enroll[i]);
        }
        return answer;
    }
}