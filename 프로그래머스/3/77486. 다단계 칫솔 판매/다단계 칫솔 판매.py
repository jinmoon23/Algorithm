def solution(enroll, referral, seller, amount):
    relation = {}
    total = {}
    
    for i in range(0, len(enroll)):
        relation[enroll[i]] = referral[i]
        total[enroll[i]] = 0
        
    for i in range(0, len(seller)):
        curr_sender = seller[i]
        money = amount[i] * 100
        
        while (money > 0 and curr_sender != "-"):
            share = money // 10
            next_sender = relation[curr_sender]
            
            total[curr_sender] += money - share
            
            money = share
            curr_sender = next_sender
        
    return [total[name] for name in enroll]