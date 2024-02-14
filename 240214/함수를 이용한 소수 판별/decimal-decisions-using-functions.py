a, b = map(int, input().split())

def is_prime(n):
    for i in range(2, n):
        if n % i == 0:
            return False
    return True
        
ans = 0
for i in range(a, b+1):
    if i == 1:
        continue
    if is_prime(i):
        ans += i

print(ans)