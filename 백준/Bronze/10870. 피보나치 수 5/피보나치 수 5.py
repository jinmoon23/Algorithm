N = int(input())
fivo = [0, 1]
for i in range(2, N+1):
    fivo.append(fivo[i - 1] + fivo[i - 2])
print(fivo[N])