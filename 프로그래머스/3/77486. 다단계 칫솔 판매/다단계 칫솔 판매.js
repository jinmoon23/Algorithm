// 추천인에게 배분 먼저, 나머지는 자신이 가짐
function solution(enroll, referral, seller, amount) {
    var answer = [];
    // 1. 추천인과 가입자 연결
    const relation = {};
    for (let i = 0; i < referral.length; i++) {
        relation[enroll[i]] = referral[i];
    }
    // 2. 각 인원이 가지는 금액 초기화
    const total = {};
    for (let i = 0; i < enroll.length; i++) {
        total[enroll[i]] = 0;
    }
    // 3. 배분
    for (let i = 0; i < seller.length; i++) {
        // 3-1. 각 seller의 금액(이후 재할당되므로 let 선언)
        let money = amount[i] * 100;
        // 3-2. 현재의 seller 정의
        let currSender = seller[i];
        
        // 3-3. 말단에서부터 최상단까지 배분
        while(money > 0 && currSender != "-") {
            const nextSender = relation[currSender];
            const share = Math.floor(money / 10);
            total[currSender] += money - share;
            
            money = share;
            currSender = nextSender;
        }
    }
    
    return enroll.map((name) => total[name]);
}