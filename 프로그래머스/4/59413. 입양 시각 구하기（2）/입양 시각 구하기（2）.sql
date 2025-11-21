-- 코드를 입력하세요
-- 가장 큰 문제: HOUR(DATETIME)가 0부터 24까지 모든 값을 가지지 않음
-- 
SET @HOUR := -1;

SELECT
    (@HOUR := @HOUR + 1) AS HOUR,
    (SELECT COUNT(*)
    FROM ANIMAL_OUTS
     WHERE HOUR(DATETIME) = @HOUR
    ) AS COUNT
FROM
    ANIMAL_OUTS
WHERE @HOUR < 23;
