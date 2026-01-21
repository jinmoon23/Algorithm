// 단품으로만 제공하던 메뉴를 조합해서 코스요리 형태로 재구성해서 새로운 메뉴를 제공
// 이전에 가장 많이 함께 주문한 단품메뉴들을 코스요리 메뉴로 구성
// 최소 2명 이상의 손님으로부터 주문된 단품메뉴 조합에 대해서만 코스요리 메뉴 후보에 포함
// 최소 2가지 이상의 단품메뉴로 구성
function combinations(arr, r) {
    if (r === 0) return [[]];
    if (arr.length === 0 || r > arr.length) return [];
    
    const [first, ...rest] = arr;
    // 첫 요소를 포함하지 않는 조합
    const withoutFirst = combinations(rest, r);
    // 첫 요소를 포함하는 조합
    const withFirst = combinations(rest, r - 1).map(comb => [first, ...comb]);
    
    return [...withoutFirst, ...withFirst];
}

function solution(orders, course) {
    var answer = [];
    for (const len of course) {
        const courseToCount = {};
        for (const order of orders) {
            const combArray = combinations([...order], len);
            for (const comb of combArray) {
                const setMenu = comb.sort().join('');
                if (courseToCount[setMenu]) {
                    courseToCount[setMenu] += 1;    
                } else {
                    courseToCount[setMenu] = 1;
                }   
            }
        }
        const max = [];
        let maxCount = 0;
        for (const count of Object.values(courseToCount)) {
            if (count > maxCount) {
                maxCount = count;
            }
        }
        for (const [setMenu, count] of Object.entries(courseToCount)) {
            if (count >= 2 && count === maxCount) {
                max.push(setMenu);
            }
        }
        for (const menu of max) {
            answer.push(menu);
        }
    }    
    return answer.sort();
}