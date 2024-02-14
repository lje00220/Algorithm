a, b = map(int, input().split())

def is_prime(n):
    if n == 1:
        return False
    for i in range(2, n):
        if n % i == 0:
            return False
    return True

def even(n):
    return (n // 10 + n % 10) % 2 == 0

cnt = 0
for i in range(a, b+1):
    if is_prime(i) and even(i):
        cnt += 1

print(cnt)