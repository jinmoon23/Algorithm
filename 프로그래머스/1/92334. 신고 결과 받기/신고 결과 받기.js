// 불량 이용자를 신고하고 처리 결과를 메일로 발송하는 시스템
// 신고한 모든 내용을 취합하여 마지막에 한꺼번에 게시판 이용 정지를 시키면서 정지 메일을 발송
function solution(id_list, report, k) {
    var answer = new Array(id_list.length).fill(0);
    // 1. 신고받은 id를 key로, 신고한 id들을 담은 set을 value로 가지는 오브젝트 초기화
    const attacked = {};
    for (const log of report) {
        const [from, to] = log.split(" ");
        if (!attacked[to]) {
            attacked[to] = new Set();
            attacked[to].add(from);
        } else {
            attacked[to].add(from);
        }
    }
    // 2. id를 key로, index를 value로 매핑 -> set 순회하며 index를 활용예정
    const mapping = {};
    for (let i = 0; i < id_list.length; i++) {
        mapping[id_list[i]] = i;
    }
    
    for (let i = 0; i < id_list.length; i++) {
        const id = id_list[i];
        const fromSet = attacked[id];
        // 3. attacked 오브젝트의 값이 없을 경우 방지
        // 신고한 사람의 수가 k를 넘으면 정지됨
        if (fromSet && fromSet.size >= k) {
            for (const id of fromSet) {
                // 4. 신고한사람이 모인 set의 id를 활용해 answer 배열에 값을 채움
                answer[mapping[id]] += 1;
            }
        }
    }
    
    return answer;
}