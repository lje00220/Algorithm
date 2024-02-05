s1 = input()
s2 = input()
sorted_s1 = sorted(s1)
sorted_s2 = sorted(s2)

cnt = 0

if len(s1) != len(s2):
    cnt += 1

for i in range(min(len(s1), len(s2))):
    if sorted_s1[i] != sorted_s2[i]:
        cnt += 1
        break

if cnt == 0:
    print('Yes')
else:
    print('No')