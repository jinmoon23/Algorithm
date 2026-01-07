function solution(progresses, speeds) {
    var answer = [];
    let front = 0;
    let rear = progresses.length;
    
    while (front < rear) {
        for (const [i, v] of speeds.entries()) {
            progresses[i] += v;
        }
        if (progresses[front] >= 100) {
            let count = 0
            while (progresses[front] >= 100) {
                front++;
                count++;
            }
            answer.push(count);
        }
    }
    return answer;
}