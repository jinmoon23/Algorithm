function solution(video_len, pos, op_start, op_end, commands) {
  function strToSec(str) {
    const [minute, sec] = str.split(':').map((e) => Number(e));
    const time = minute * 60 + sec;
    return time;
  } 
  function timeToStr(time) {
    const minute = parseInt(time / 60);
    const sec = time % 60;
    const str = `${minute.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
    return str;
  }
  function inOpening(start, current, end) {
    if ((start <= current) && (current <= end)) {
      return true;
    } return false;
  }
  const vSec = strToSec(video_len);
  let current = strToSec(pos);
  const opStart = strToSec(op_start);
  const opEnd = strToSec(op_end);
  
  if (inOpening(opStart,current,opEnd)) {
    current = opEnd;
  }

  for (const c of commands) {
    if (c === 'next') {
      if (current + 10 > vSec) {
        current = vSec;
      } else {
        current += 10;
      }
    } else {
      if (current - 10 < 0) {
        current = 0;
      } else {
        current -= 10;
      }
    }
    if (inOpening(opStart,current,opEnd)) {
      current = opEnd;
    }
  }
  return timeToStr(current);
}