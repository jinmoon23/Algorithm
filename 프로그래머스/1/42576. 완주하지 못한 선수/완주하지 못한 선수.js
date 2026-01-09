function solution(participant, completion) {
    var answer = '';
    const dict = {};
    for (const person of participant) {
        if(dict[person]) {
            dict[person] += 1;
        } else {
            dict[person] = 1;
        }
    }
    for (const person of completion) {
        if(dict[person] > 0) {
            dict[person] -= 1;
        }
    }
    for (let [key, value] of Object.entries(dict)) {
        if (value >= 1) {
            answer = key;
        }
    }
    return answer;
}