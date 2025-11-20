function solution(prices) {
    var answer = Array(prices.length).fill(0);
    // 가격이 떨어지지 않은 초(인덱스) 기록하는 stack
    const stack = [];
    for (let i = 0; i < prices.length; i++) {
        while (true) {
            if (stack.length === 0) break;
            const stackTopTime = prices[stack[stack.length - 1]]
            // 가격이 떨어지면
            if (prices[i] < stackTopTime) {
                // stack 에서 빼내고
                const pastTime = stack.pop();
                // 현재 시간 - 직전 시간
                // 이후의 연산에서 배제
                answer[pastTime] = i - pastTime;
            } else break;
        }
        stack.push(i);
    }
    
    const lastTime = stack.pop();
    for (const time of stack) {
        answer[time] = lastTime - time;
    }
    return answer;
}