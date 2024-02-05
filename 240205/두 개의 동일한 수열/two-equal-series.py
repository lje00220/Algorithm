n = int(input())
a = list(map(int, input().split()))
b = list(map(int, input().split()))
cnt = 0

a.sort()
b.sort()

for i in range(n):
    if a[i] != b[i]:
        cnt +=1
        break

if cnt == 0:
    print('Yes')
else:
    print('No')