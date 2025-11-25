function solution(n, w, num) {
    var answer = 0;
    let totalRow = n % w === 0 ? parseInt(n / w) : parseInt(n / w) + 1;
    const boxes = Array(totalRow).fill().map(() => Array(w).fill(0));
    let currentNum = 0;
    // 문제의 제시 순서와 다르게 0번 row의 좌측부터 박스 번호를 누적한다 -> 생각 편하게 하기 위함
    for (let i = 0; i < totalRow; i++) {
        // 좌 -> 우
        if (i % 2 === 0) {
            // 여기서 for 문 조건을 활용해 필요없는 박스를 누적하지 않는다
            for (let j = 0; j < w && currentNum < n; j++) {
                currentNum += 1;
                boxes[i][j] = currentNum;
            }
        // 우 -> 좌
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
                    // boxes[k][j] 값이 0이면 박스가 아님! 이를 제거해줘야 함
                    if (boxes[k][j] !== 0) answer += 1;
                }
            }
        }
    }
    return answer;
}