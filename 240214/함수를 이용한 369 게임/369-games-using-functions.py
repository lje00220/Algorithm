a, b = map(int, input().split())

def triple(n):
    return n % 3 == 0

def in_369(n):
    return '3' in str(n) or '6' in str(n) or '9' in str(n)

cnt = 0

for i in range(a, b+1):
    if triple(i) or in_369(i):
        cnt += 1

print(cnt)