-- 코드를 입력하세요
SELECT
    COUNT(DISTINCT NAME) AS count
FROM
    ANIMAL_INS
WHERE
    NAME IS NOT NULL
# 여러 컬럼의 조합에 대해 중복을 제거하고 카운트하고 싶을 때
# SELECT COUNT(DISTINCT 컬럼1, 컬럼2) FROM 테이블명;
