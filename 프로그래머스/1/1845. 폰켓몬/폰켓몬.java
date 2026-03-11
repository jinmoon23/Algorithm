import java.util.Set;
import java.util.HashSet;

class Solution {
    public int solution(int[] nums) {
        int n = nums.length / 2;
        Set<Integer> sets = new HashSet<>();
        for (int num : nums) sets.add(num);
        return Math.min(n, sets.size());
    }
}