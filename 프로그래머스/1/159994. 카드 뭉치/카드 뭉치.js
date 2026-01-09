function solution(cards1, cards2, goal) {
    while(goal.length > 0) {
        const currentCard = goal.shift();
        if (currentCard == cards1[0]) {
            cards1.shift();
        } else if (currentCard == cards2[0]) {
            cards2.shift();
        } else return "No"
    }
    return "Yes"
}