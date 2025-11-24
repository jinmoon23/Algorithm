function solution(n, w, num) {
    var answer = 1;
    let totalRow = n % w === 0 ? parseInt(n / w) : parseInt(n / w) + 1;
    const stack = [0];
    const boxes = Array(totalRow).fill().map(() => Array(w).fill(0));
    const flag = totalRow % 2 === 0 ? true : false;
    let currentNum = 1;
    for (let i = 0; i < totalRow; i++) {  // bottom i=0부터
      if (i % 2 === 0) {  // 첫 층(0 even) L→R, 홀수 층처럼
        for (let j = 0; j < w && currentNum <= n; j++) {
          boxes[i][j] = currentNum++;
        }
      } else {  // 짝수 층 R→L
        for (let j = w - 1; j >= 0 && currentNum <= n; j--) {
          boxes[i][j] = currentNum++;
        }
      }
    }
    console.log(boxes);
//     for (let i = totalRow - 1; i > -1; i--) {
//         // 총 층수가 짝수층인 경우
//         if (flag) {
//             // 좌 -> 우
//             if (i % 2 !== 0) {
//                     for (let j = 0; j < w; j++) {
//                     const popped = stack.pop();
//                     boxes[i][j] = popped + 1;
//                     if (boxes[i][j] === n) break;
//                     stack.push(boxes[i][j])
//                 }
//             // 우 -> 좌
//             } else {
//                 for (let j = w - 1; j > -1; j--) {
//                     const popped = stack.pop();
//                     boxes[i][j] = popped + 1;
//                     if (boxes[i][j] === n) break;
//                     stack.push(boxes[i][j])
//                 }
//             }
//         // 총 층수가 홀수층인 경우
//         } else {
//             // 우 -> 좌
//             if (i % 2 !== 0) {
//                 for (let j = w - 1; j > -1; j--) {
//                     const popped = stack.pop();
//                     boxes[i][j] = popped + 1;
//                     if (boxes[i][j] === n) break;
//                     stack.push(boxes[i][j])
//                 }
//             // 좌 -> 우 
//             } else {
//                 for (let j = 0; j < w; j++) {
//                     const popped = stack.pop();
//                     boxes[i][j] = popped + 1;
//                     if (boxes[i][j] === n) break;
//                     stack.push(boxes[i][j])
//                 }
//             }
//         }
//     }
    
    // for (let i = 0; i < totalRow; i++) {
    //     for (let j = 0; j < w; j++) {
    //         if (boxes[i][j] === num) {
    //             for (let k = i; k < totalRow; k++) {
    //                 answer += 1;
    //             }break;
    //         }
    //     }
    // }
    let foundRow, foundCol;
for (let i = 0; i < totalRow; i++) {
  for (let j = 0; j < w; j++) {
    if (boxes[i][j] === num) {
      foundRow = i; foundCol = j;
      break;
    }
  }
}
for (let k = foundRow + 1; k < totalRow; k++) {  // 위층만 (top 방향)
  if (boxes[k][foundCol] > 0) answer++;  // 같은 col, 빈 슬롯 스킵
}
return answer;
return answer;
    
}