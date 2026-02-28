def solution(enroll, referral, seller, amount):
    answer = []
    relation = {}
    total = {}
    
    for i in range(0, len(enroll)):
        relation[enroll[i]] = referral[i]
        total[enroll[i]] = 0
    
    for i in range(0, len(seller)):
        money = amount[i] * 100
        sender = seller[i]
        
        while (sender != "-" and money > 0):
            share = money // 10
            receiver = relation[sender]
            
            total[sender] += money - share
            money = share
            sender = receiver
    
    return [total[name] for name in enroll]