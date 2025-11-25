// 일주일간 각자 설정한 출근 희망 시각에 늦지 않고 출근한 직원들에게 상품을 주는 이벤트
// 모든 시각은 시에 100을 곱하고 분을 더한 정수로 표현됩니다.
// 예를 들어 10시 13분은 1013이 되고 9시 58분은 958이 됩니다.
// 6은 토요일, 7은 일요일에 이벤트를 시작했음을 의미
function solution(schedules, timelogs, startday) {
    let answer = 0;
    
    for (const [i, s] of schedules.entries()) {
        const hour = parseInt(s / 100);
        const minute = parseInt(s % 100);
        const aTime = minute + 10 >= 60 ? ((hour+1) * 100) + (minute + 10) % 60 : s + 10;
        let k = startday; // 5
        let canGetGift = true;
        
        for (const [j, t] of timelogs[i].entries()) {
            // 이게 핵심
            const weekday = (startday -1 + j) % 7 + 1;
            if (weekday >= 6) continue;
            if (t > aTime) {
                canGetGift = false;
                break;
            }
        }
        if (canGetGift) answer++;
    }
    return answer;
}