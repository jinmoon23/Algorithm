function solution(prices) {
    var answer = Array(prices.length).fill(0);
    // 가격이 떨어지지 않은 초(인덱스) 기록하는 stack
    const stack = [];
    for (let i = 0; i < prices.length; i++) {
        while (true) {
            if (stack.length === 0) break;
            const top = prices[stack[stack.length - 1]]
            // 가격이 떨어진 초(i)
            if (prices[i] < top) {
                // stack 에서 빼내고
                const topIndex = stack.pop();
                // answer[i]에 stack[top] 초 와의 차이 기록
                answer[topIndex] = i - topIndex;
            } else break;
        }
        stack.push(i);
    }
    
    const topIndex = stack.pop();
    for (const time of stack) {
        answer[time] = topIndex - time;
    }
    return answer;
}