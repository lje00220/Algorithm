n, t = map(int, input().split())
arr1 = list(map(int, input().split()))
arr2 = list(map(int, input().split()))

for _ in range(t):
    temp1, temp2 = arr1[n-1], arr2[n-1]

    for i in range(n-1, 0, -1):
        arr1[i] = arr1[i - 1]
    arr1[0] = temp2

    for i in range(n-1, 0, -1):
        arr2[i] = arr2[i - 1]
    arr2[0] = temp1

for elem in arr1:
    print(elem, end=' ')
print()
for elem in arr2:
    print(elem, end=' ')