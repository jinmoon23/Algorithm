# 동일한 회원이 동일한 상품을 재구매한 데이터
# 유저1이 물건3을 사고 이후 유저1이 물건3을 다시 샀다 -> 재구매
SELECT
    USER_ID, PRODUCT_ID
FROM
    ONLINE_SALE 
GROUP BY
    USER_ID, PRODUCT_ID
HAVING
    COUNT(*) > 1
ORDER BY
    USER_ID,
    PRODUCT_ID DESC;