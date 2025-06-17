-- 코드를 작성해주세요
SELECT
    COUNT(*) AS COUNT
FROM
    ECOLI_DATA
WHERE 
    # 1번은 0(2^0), 2번은 2(2^1), 3번은 4(2^2)
    (GENOTYPE & 2) = 0 AND
    ((GENOTYPE & 1) != 0 OR
    (GENOTYPE & 4) != 0)