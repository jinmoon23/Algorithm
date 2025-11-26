function solution(video_len, pos, op_start, op_end, commands) {
    // "mm:ss" → 총 초
    function strToSec(str) {
        const [mm, ss] = str.split(':').map(Number);
        return mm * 60 + ss;
    }
    
    // 총 초 → "mm:ss"
    function secToStr(sec) {
        const mm = Math.floor(sec / 60);
        const ss = sec % 60;
        return `${mm.toString().padStart(2, '0')}:${ss.toString().padStart(2, '0')}`;
    }
    
    // 오프닝 체크 (총 초 기준)
    function isOpening(startSec, currentSec, endSec) {
        return startSec <= currentSec && currentSec <= endSec;
    }
    
    let currentSec = strToSec(pos);
    const startSec = strToSec(op_start);
    const endSec = strToSec(op_end);
    const vEndSec = strToSec(video_len);
    
    // 초기 위치 스킵 체크
    if (isOpening(startSec, currentSec, endSec)) {
        currentSec = endSec;
    }
    
    for (const cmd of commands) {
        if (cmd === 'next') {
            if (currentSec + 10 > vEndSec) {
                currentSec = vEndSec;  // 끝으로 클램프
            } else {
                currentSec += 10;
            }
        } else {  // 'prev'
            if (currentSec - 10 < 0) {
                currentSec = 0;  // 처음으로 클램프
            } else {
                currentSec -= 10;
            }
        }
        
        // 이동 후 스킵 체크
        if (isOpening(startSec, currentSec, endSec)) {
            currentSec = endSec;
        }
    }
    
    return secToStr(currentSec);
}