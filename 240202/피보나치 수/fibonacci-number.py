n = int(input())
fibbo = [0] * n
if n == 1:
    fibbo[0] = 1
else:
    fibbo[0], fibbo[1] = 1, 1
    for i in range(3, n+1):
        fibbo[i-1] = fibbo[i-2] + fibbo[i-3]

print(fibbo[-1])