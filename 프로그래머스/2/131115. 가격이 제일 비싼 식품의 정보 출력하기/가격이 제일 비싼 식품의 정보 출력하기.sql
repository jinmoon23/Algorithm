-- 코드를 입력하세요
SELECT
    *
FROM 
    FOOD_PRODUCT
# WHERE 절은 각 ROW에 대해 동작하기 때문에 집계함수 MAX를 서브쿼리 없이 사용할 수 없다. 
# WHERE
    # PRICE = MAX(PRICE)
WHERE
    PRICE = (SELECT
                MAX(PRICE) 
             FROM 
                FOOD_PRODUCT
            )