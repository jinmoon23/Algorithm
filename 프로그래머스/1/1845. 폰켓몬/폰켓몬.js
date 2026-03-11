function solution(nums) {
    const n = nums.length / 2;
    const sets = new Set(nums);
    return Math.min(n, sets.size);
    
}