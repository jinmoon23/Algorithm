function solution(s) {
    let answer = 0;
    s = [...s];
    const len = s.length;
    const stack = [];
    const obj = {')':'(', '}':'{', ']':'['};
    let isCorrect = true;
    
    for (let i = 0; i < len - 1; i++) {
        for (let char of s) {
            if (Object.values(obj).includes(char)) {
                stack.push(char);
            } else {
                if (stack.length === 0) {
                    isCorrect = false;
                    break;
                } else {
                    if (stack.at(-1) !== obj[char]) {
                        isCorrect = false;
                        break;
                    } else {
                        stack.pop();
                    }
                }
            }
        }
        if (isCorrect && stack.length === 0) {
            answer += 1;
        }
        isCorrect = true;
        s.push(s.shift());
    }
    return answer;
}