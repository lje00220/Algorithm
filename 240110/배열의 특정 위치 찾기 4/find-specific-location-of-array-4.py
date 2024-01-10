arr = list(map(int, input().split()))
cnt = 0
hap = 0
for elem in arr:
    if elem == 0:
        break
    if elem % 2 == 0:
        cnt += 1
        hap += elem
    
print(cnt, hap)