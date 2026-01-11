function solution(participant, completion) {
    var answer = '';
    const personCount = new Map();
    
    for (person of participant) {
        if (personCount.get(person)) {
            personCount.set(person, personCount.get(person) + 1);
        } else {
            personCount.set(person, 1); 
        }
    }
    
    for (person of completion) {
        if (personCount.get(person)) {
            personCount.set(person, personCount.get(person) - 1);
        }
    }
    
    for (let [name, count] of personCount) {
        if (count > 0) {
            answer = name;
            return answer;
        }
    }
}