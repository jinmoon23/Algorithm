-- 코드를 입력하세요
-- 보호소에 들어올 당시에는 중성화되지 않았지만 
-- 보호소를 나갈 당시에는 중성화된 동물
SELECT
    O.ANIMAL_ID, O.ANIMAL_TYPE, O.NAME
FROM
    ANIMAL_OUTS O
JOIN
    ANIMAL_INS I ON O.ANIMAL_ID = I.ANIMAL_ID
WHERE
    I.SEX_UPON_INTAKE LIKE '%Intact%' AND
    (O.SEX_UPON_OUTCOME LIKE '%Spayed%' OR
     O.SEX_UPON_OUTCOME LIKE '%Neutered%')