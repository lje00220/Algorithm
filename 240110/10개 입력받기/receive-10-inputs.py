arr = list(map(int, input().split()))
cnt = 0
hap = 0
for elem in arr:
    if elem == 0:
        break
    cnt += 1
    hap += elem

print(f'{hap} {hap/cnt:.1f}')