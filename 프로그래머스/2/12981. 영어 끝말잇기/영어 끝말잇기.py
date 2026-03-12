def solution(n, words):
    usedWords = set([words[0]])
    for i in range(1, len(words)):
        prevWord = words[i - 1]
        currWord = words[i]
        tail = prevWord[-1]
        head = currWord[0]
        
        if tail != head or currWord in usedWords:
            player = i % n + 1
            turn = i // n + 1
            return [player, turn]
        usedWords.add(currWord)
    return [0, 0]
        