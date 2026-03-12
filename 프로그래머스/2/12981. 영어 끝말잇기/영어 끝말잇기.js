// 사람의 수 n과 사람들이 순서대로 말한 단어 words 가 매개변수로 주어질 때, 
// 가장 먼저 탈락하는 사람의 번호와 그 사람이 자신의 몇 번째 차례에 탈락하는지
function solution(n, words) {
    var answer = [0,0];
    const len = words.length;
    const wordSet = new Set();
    
    for (let i = 1; i < len; i++) {
        if (!wordSet.has(words[i - 1])) wordSet.add(words[i - 1])
        const tail = words[i - 1][words[i - 1].length - 1];
        const head = words[i][0];
        const failNum = i % n;
        const failCnt = Math.floor(i / n);
        
        if (tail != head) {
            answer[0] = failNum + 1;
            answer[1] = failCnt + 1;
            break;
        }
        if (wordSet.has(words[i])) {
            answer[0] = failNum + 1;
            answer[1] = failCnt + 1;
            break;
        }
        
    }
    return answer;
}