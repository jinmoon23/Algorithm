// 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범

function solution(genres, plays) {
    var answer = [];
    const genresPlaySum = {};
    const songs = [];
    // 1. 각 장르의 총 재생횟수와 장르에 속한 노래의 재생횟수를 담은 오브젝트와 배열 파싱
    for (let i = 0; i < genres.length; i++) {
        songs.push({genre: genres[i], play: plays[i], id: i});
        if (genresPlaySum[genres[i]]) {
            genresPlaySum[genres[i]] += plays[i];
        } else {
            genresPlaySum[genres[i]] = plays[i];
        }
    }
    console.log(genresPlaySum, songs);
    // 2. 총 재생횟수 기준 장르 내림차순 정렬
    const sortedGenreSum = Object.keys(genresPlaySum).sort((a,b) => {
        return genresPlaySum[b] - genresPlaySum[a];
    })
    // 3. sortedGenreSum 순회
    for (const genre of sortedGenreSum) {
        const filteredSongs = songs.filter((song) => {
            return song.genre == genre;
        })
        filteredSongs.sort((a,b) => {
            if (a.play != b.play) {
                return b.play - a.play;
            } 
            return a.id - b.id;
        });
        
        for (let i = 0; i < 2; i++) {
            if (filteredSongs[i]) {
                answer.push(filteredSongs[i].id);    
            }
        }
    }
    
    return answer;
}