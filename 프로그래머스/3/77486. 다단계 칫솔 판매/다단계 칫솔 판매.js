// 모든 판매원은 칫솔의 판매에 의하여 발생하는 이익에서 10% 를 계산하여 자신을 조직에 참여시킨 추천인에게 배분하고 
// 나머지는 자신이 가집니다.
// 10% 를 계산할 때에는 원 단위에서 절사하며, 10%를 계산한 금액이 1 원 미만인 경우에는 이득을 분배하지 않고 자신이 모두 가집니다.
// 칫솔 1개당 이익 100원
// referral 내에서 i 번째에 있는 이름은 배열 enroll 내에서 i 번째에 있는 판매원을 조직에 참여시킨 사람의 이름
// referral의 길이는 enroll의 길이와 같습니다.

function solution(enroll, referral, seller, amount) {
    const root = {};
    
    for (let i = 0; i < referral.length; i++) {
        root[enroll[i]] = referral[i];
    }
    
    const profit = {};
    for (const name of enroll) {
        profit[name] = 0;
    }
    
    for (let i = 0; i < seller.length; i++) {
        let money = amount[i] * 100 
        let sender = seller[i];
        
        while (money > 0 && sender != "-") {
            const receiver = root[sender]; 
            profit[sender] += money - Math.floor(money / 10);
            
            sender = receiver;
            money = Math.floor(money / 10)
        }
    }
    const answer = enroll.map((name) => profit[name]);
    return answer;
}