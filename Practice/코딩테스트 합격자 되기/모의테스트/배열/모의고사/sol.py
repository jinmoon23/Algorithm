# input : 정답이 저장된 배열 answers
# output : 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 리턴
# 제약: answers 최대 길이는 10,000(10^4)

def solution(answers):
    patterns = [
        [1,2,3,4,5],
        [2,1,2,3,2,4,2,5],
        [3,3,1,1,2,2,4,4,5,5]
    ]

    scores = [0 for _ in range(3)]

    for i, ans in enumerate(answers):
        for j, pattern in enumerate(patterns):
            if ans == pattern[i % len(pattern)]:
                scores[j] += 1

    max_score = max(scores)
    result = []
    for i, score in enumerate(scores):
        if score == max_score:
            result.append(i+1)
    return result

print(solution([1,2,3,4,5]))
print(solution([1,3,2,4,2]))
print(solution([1,2,3,5,2,3,1,2,3,4,5]))