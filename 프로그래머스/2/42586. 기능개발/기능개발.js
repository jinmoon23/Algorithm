function solution(progresses, speeds) {
    var answer = [];
    const days = progresses.map((progress, i) => {
        return Math.ceil((100 - progress) / speeds[i]);
    })
    
    while (days.length > 0) {
        const currentDay = days.shift();
        let count = 1;
        // days.length > 0 조건을 확인하지 않으면 days[0]에서 런타임 에러 발생
        while (currentDay >= days[0]) {
            days.shift();
            count++;
        }
        answer.push(count);
    }
    return answer;
}