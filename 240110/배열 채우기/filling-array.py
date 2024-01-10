arr = list(map(int, input().split()))
arr = arr[::-1]
for elem in arr:
    if elem == 0:
        continue
    print(elem, end=' ')