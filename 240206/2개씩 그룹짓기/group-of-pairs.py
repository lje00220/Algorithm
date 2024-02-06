n = int(input())
arr = list(map(int, input().split()))

# arr 정렬 후 최솟값과 최댓값을 더해가며 remove함

arr.sort()

res = 0
ans = 0

for _ in range(n):
    res = max(arr) + min(arr)
    arr.remove(max(arr))
    arr.remove(min(arr))
    if res >= ans:
        ans = res

print(ans)