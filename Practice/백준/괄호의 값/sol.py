import sys
sys.stdin = open("input.txt")

brackets = input()
stack = []

for b in brackets:
    if b == '(' or b == '[':
        stack.append(b)
    else:
        temp = 0
        while stack:
            top = stack.pop()
            if (top == '(' and b == ')') or (top == '[' and b == ']'):
                if temp == 0:
                    stack.append(2 if top == '(' else 3)
                else:
                    stack.append((2 if top == '(' else 3) * temp)
                break
            elif isinstance(top, int):
                temp += top
            else:
                # 괄호 짝 안 맞음
                print(0)
                exit()
        else:
            # 스택 비었는데 닫는 괄호 나온 경우
            print(0)
            exit()

if any(isinstance(x, str) for x in stack):
    print(0)
else:
    print(sum(stack))
