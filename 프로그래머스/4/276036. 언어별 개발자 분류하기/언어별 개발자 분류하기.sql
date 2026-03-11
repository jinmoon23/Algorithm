SELECT GRADE, ID, EMAIL
FROM (SELECT
    CASE WHEN SKILL_CODE & (SELECT SUM(CODE) AS FRONT_SKILLS
                           FROM SKILLCODES
                           WHERE CATEGORY = 'Front End') AND SKILL_CODE & (SELECT CODE
                                                                          FROM SKILLCODES
                                                                          WHERE NAME = 'Python')
        THEN 'A'
        WHEN SKILL_CODE & (SELECT CODE
                          FROM SKILLCODES
                          WHERE NAME = 'C#') THEN 'B'
        WHEN SKILL_CODE & (SELECT SUM(CODE) AS FRONT_SKILLS
                          FROM SKILLCODES
                          WHERE CATEGORY = 'Front End') THEN 'C'
        END AS GRADE, ID, EMAIL
FROM
    DEVELOPERS) T
WHERE
    GRADE IS NOT NULL
ORDER BY
    GRADE, ID;
    