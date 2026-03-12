function solution(n, words) {
    var answer = [0, 0];
    const usedWords = new Set([words[0]]);
    
    for (let i = 1; i < words.length; i++) {
        const prevWord = words[i - 1];
        const currWord = words[i];
        const tail = prevWord.slice(-1);
        const head = currWord[0];
        
        if (usedWords.has(currWord) || head != tail) {
            const player = (i % n) + 1;
            const turn = Math.floor(i / n) + 1;
            return [player, turn];
        }
        usedWords.add(currWord);
    }
    return answer;
}