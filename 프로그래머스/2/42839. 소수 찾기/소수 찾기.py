# 한자리 숫자가 적힌 종이 조각 -> 각 자리수가 문자열로 표현되어 있음
# 한번에 하나의 종이 조각만 사용 가능
# 소수는 자기 자신과 1만 인수로 가지는 수

# 1. 문자열을 정수 요소 리스트로 변환
# 2. 생성 가능한 모든 수 구현
# 3. 그 중 소수인 경우만 카운트하여 리턴
# 4. 어떤 자연수 n이 소수인지 확인하려면, 2부터 루트n까지의 모든 자연수로 나누어보고, 나누어떨어지는 수가 하나도 없으면 소수입니다.
import itertools

def solution(numbers):
    answer = 0
    num_set = set()
    for i in range(1,len(numbers)+1):
        for permu in itertools.permutations(numbers,i):
            num_set.add(int(''.join(permu)))
    for num in num_set:
        if is_prime(num): answer += 1
    return answer

def is_prime(n):
    if n < 2: return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0: return False
    return True