// 다양한 사람들이 들어오고, 나가는 것을 지켜볼 수 있는 관리자창 만들기
// 채팅방은 중복 닉네임을 허용
// 채팅방에 들어오고 나가거나, 닉네임을 변경한 기록이 담긴 문자열 배열 record
// 최종적으로 방을 개설한 사람이 보게 되는 메시지를 문자열 배열 형태로 return
function solution(record) {
    var answer = [];
    const idToName = {};
    
    for (const log of record) {
        const [action, id, name] = log.split(" ");
        if (action === 'Leave') continue;
        idToName[id] = name;
    }
    
    for (const log of record) {
        const [action, id, _] = log.split(" ");
        if (action === 'Enter') answer.push(`${idToName[id]}님이 들어왔습니다.`)
        else if (action === 'Leave') answer.push(`${idToName[id]}님이 나갔습니다.`)
    }
    return answer;
}

