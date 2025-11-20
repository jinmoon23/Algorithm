function solution(board, moves) {
    var answer = 0;
    const len = board.length;
    // 인형을 옮겨 담을 바구니
    const basket = [];
    for (const move of moves) {
        const col = move - 1;
        for (let i = 0; i < len; i++) {
            if (board[i][col] != 0) {
                const doll = board[i][col];
                if (basket.length > 0 && basket[basket.length - 1] === doll) {
                    basket.pop();
                    answer += 2;
                    board[i][col] = 0;    
                    break;
                }
                basket.push(doll);
                board[i][col] = 0;
                break;
            }
        }
    }
    return answer;
}