// 가질 수 있는 폰켓몬 종류 수의 최댓값
function solution(nums) {
    const n = nums.length / 2;
    const sets = new Set(nums);
    return Math.min(sets.size, n);
}