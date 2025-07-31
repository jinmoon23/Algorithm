SELECT
    M.MEMBER_NAME,
    R.REVIEW_TEXT,
    DATE_FORMAT(R.REVIEW_DATE, '%Y-%m-%d') AS REVIEW_DATE
FROM
    MEMBER_PROFILE M
JOIN
    REST_REVIEW R ON M.MEMBER_ID = R.MEMBER_ID
WHERE
    R.MEMBER_ID IN (
        SELECT MEMBER_ID
        FROM REST_REVIEW
        GROUP BY MEMBER_ID
        HAVING COUNT(*) = (
            SELECT MAX(review_count) FROM (
                SELECT COUNT(*) AS review_count
                FROM REST_REVIEW
                GROUP BY MEMBER_ID
            ) AS ReviewCounts
        )
    )
ORDER BY
    R.REVIEW_DATE,
    R.REVIEW_TEXT;
