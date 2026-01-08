function solution(cards1, cards2, goal) {
    let answer = 'Yes';
    while (goal.length > 0) {
        const macher = goal.shift();
        if (macher == cards1[0]) {
            cards1.shift();
        } else if (macher == cards2[0]) {
            cards2.shift();
        } else {
            answer = "No"
        }
    }
    return answer;
}