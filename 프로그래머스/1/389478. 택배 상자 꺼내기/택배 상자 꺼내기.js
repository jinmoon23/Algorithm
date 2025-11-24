function solution(n, w, num) {
    var answer = 0;
    let totalRow = n % w === 0 ? parseInt(n / w) : parseInt(n / w) + 1;
    const stack = [0];
    const boxes = Array(totalRow).fill().map(() => Array(w).fill(0));
    let currentNum = 0;
    for (let i = 0; i < totalRow; i++) {
        if (i % 2 === 0) {
            for (let j = 0; j < w && currentNum < n; j++) {
                currentNum += 1;
                boxes[i][j] = currentNum;
            }    
        } else {
            for (let j = w - 1; j > -1 && currentNum < n; j--) {
                currentNum += 1;
                boxes[i][j] = currentNum;
            }
        }
    }
    for (let i = 0; i < totalRow; i++) {
        for (let j = 0; j < w; j++) {
            if (boxes[i][j] === num) {
                for(let k = i; k < totalRow; k++) {
                    if (boxes[k][j] !== 0) answer += 1;
                }
            }
        }
    }
    return answer;
}
