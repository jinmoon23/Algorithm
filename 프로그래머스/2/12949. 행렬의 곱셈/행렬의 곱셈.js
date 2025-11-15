function solution(arr1, arr2) {
    var answer = [[]];
    // r1 & c2 는 결과의 크기 정의
    const r1 = arr1.length
    const c1 = arr1[0].length
    const r2 = arr2.length
    const c2 = arr2[0].length
    // 결과를 저장할 2차원 배열
    const arr = [];
    for (let i = 0; i < r1; i++) {
        arr.push(new Array(c2).fill(0));
    }
    console.log(arr)
    
    for (let i = 0; i < r1; i++) {
        for (let j = 0; j < c2; j++) {
            // r2 또는 c1 무관
            for (let k = 0; k < c1; k++) {
                arr[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }
    
    
    return arr
}