// 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범

function solution(genres, plays) {
    var answer = [];
    const songs = [];
    const genreToSum = {};
    for (let i = 0; i < genres.length; i++) {
        songs.push({genre: genres[i], play: plays[i], id: i});
        if (genreToSum[genres[i]]) {
            genreToSum[genres[i]] += plays[i];            
        } else {
            genreToSum[genres[i]] = plays[i];
        }
    }
    const sortedGenres = Object.keys(genreToSum).sort((a,b) => {
        return genreToSum[b] - genreToSum[a];
    })
    
    for (genre of sortedGenres) {
        const filteredSongs = songs.filter((song) => {
            return genre === song.genre;
        })
        const sortedFilterdSongs = filteredSongs.sort((a,b) => {
            return b.play - a.play;
        })
        console.log(sortedFilterdSongs);
        
        for (let i = 0; i < 2; i++) {
            if (sortedFilterdSongs[i]) {
                answer.push(sortedFilterdSongs[i].id);    
            }
        }
    }
    
    return answer;
}