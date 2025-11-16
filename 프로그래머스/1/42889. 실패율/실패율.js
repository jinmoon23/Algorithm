function solution(N, stages) {
    var failureRates = [];
    for (let n = 1; n <= N; n++) {
        let denominator = 0;
        let molecule = 0;
        for (stage of stages) {
            if (stage >= n) {
                denominator += 1
                if (stage === n) {
                molecule += 1
                }
            }
        }
        failureRates.push([n, molecule / denominator]);
    }
    failureRates.sort((a,b) => b[1] - a[1]);
    
    const answer = []
    for (failureRate of failureRates) {
        answer.push(failureRate[0])
    }
    return answer
}