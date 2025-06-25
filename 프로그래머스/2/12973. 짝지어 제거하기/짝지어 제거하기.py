def solution(s):
    answer = -1
    stack = []
    for char in s:
        if not stack or char != stack[-1]:
            stack.append(char)
        elif char == stack[-1]:
            stack.pop()
    if stack:
        return 0
    else:
        return 1