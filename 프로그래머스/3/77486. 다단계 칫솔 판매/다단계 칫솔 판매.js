function solution(enroll, referral, seller, amount) {
    var answer = [];
    // 1. referral과 enroll로 단계 매핑
    const relation = {};
    for (let i = 0; i < referral.length; i++) {
        const parent = referral[i];
        const child = enroll[i];
        relation[child] = parent;
    }
    // 2. enroll 객체 금액 초기화
    const total = {};
    for (let i = 0; i < enroll.length; i++) {
        const name = enroll[i];
        total[name] = 0;
    }
    // 3. 금액 배분
    for (let i = 0; i < seller.length; i++) {
        let profit = amount[i] * 100
        let sender = seller[i];
        
        while (profit > 0 && sender != "-") {
            const receiver = relation[sender];
            const share = Math.floor(profit / 10);
            total[sender] += profit - share;
            
            sender = receiver;
            profit = share;
        }
    }
    
    return enroll.map((name) => total[name]);
}