class Solution {
    public int solution(int n) {
        int target = Integer.bitCount(n);
        int next = n + 1;
        while (true) {
            if (Integer.bitCount(next) == target) {
                return next;
            }
            next++;
        }
    }
}