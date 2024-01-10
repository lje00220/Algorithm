arr = list(map(int, input().split()))
hap = 0
cnt = 0
for elem in arr:
    if elem < 250:
        hap += elem
        cnt += 1
    else:
        break

print(f"{hap} {hap/cnt:.1f}")