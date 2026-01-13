// 10일 동안 회원 자격을 부여
// 회원을 대상으로 매일 한 가지 제품을 할인하는 행사
// 할인하는 제품은 하루에 하나씩만 구매 가능
// 자신이 원하는 제품과 수량이 할인하는 날짜와 10일 연속으로 일치할 경우에 맞춰서 회원가입

function solution(want, number, discount) {
    var answer = 0;
    // 1. want, number 활용 매핑
    const wantHash = {};
    want.forEach((v,i) => {wantHash[v] = number[i]});
    
    for (let i = 0; i + 10 <= discount.length; i++) {
        // 2. discount 배열을 10의 길이로 슬라이싱
        const sliced = discount.slice(i,i + 10);
        // 3. sliced를 활용한 매핑
        const slicedHash = {};
        for (const stuff of sliced) {
            if (slicedHash[stuff]) {
                slicedHash[stuff] += 1;
            } else {
                slicedHash[stuff] = 1;
            }
        }
        // 4. 모두 할인받을 수 있는지 판단
        let flag = true;
        for (const stuff of want) {
            // 5. 할인받고자 하는 품목이 slicedHash에 없다면
            if (!slicedHash[stuff] || slicedHash[stuff] < wantHash[stuff]) {
                flag = false;
                break;
            }
        }
        if (flag) answer++;
    }
    return answer;
}