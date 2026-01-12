// 10일 동안 회원 자격을 부여
// 회원을 대상으로 매일 한 가지 제품을 할인하는 행사
// 할인하는 제품은 하루에 하나씩만 구매 가능
// 자신이 원하는 제품과 수량이 할인하는 날짜와 10일 연속으로 일치할 경우에 맞춰서 회원가입

function solution(want, number, discount) {
    var answer = 0;
    const wantHash = {};
    
    for (let i = 0; i < want.length; i++) {
        wantHash[want[i]] = number[i];
    }
    
    for (let i = 0; i + 10 <= discount.length; i++) {
        const sliced = discount.slice(i, i + 10);
        const discountHash = {};
        let flag = true;
        for (const e of sliced) {
            if (!wantHash[e]) continue; 
            if (discountHash[e]) {
                discountHash[e] += 1;
            } else {
                discountHash[e] = 1;
            }
        }
        for (const e of want) {
            if (!discountHash[e]) falg = false;
            if (discountHash[e] >= wantHash[e]) continue;
            else flag = false;   
        }
        if (flag) {
            answer += 1;
        }
    }
    
    return answer;
}