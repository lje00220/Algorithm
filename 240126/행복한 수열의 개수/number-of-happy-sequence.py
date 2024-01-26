n, m = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(n)]

# 앞에서부터 하나씩 탐색을 하면서 같은 숫자면 +1 아니면 0으로 초기화
result = 0

for row in range(n):
    cnt = 0
    standard = arr[row][0]
    for col in range(n):
        if arr[row][col] == standard:
            cnt += 1
        else:
            standard = arr[row][col]
            cnt = 1
    if cnt >= m:
        result += 1
        
for col in range(n):
    cnt = 0
    standard = arr[0][col]
    for row in range(n):
        if arr[row][col] == standard:
            cnt += 1
        else:
            standard = arr[row][col]
            cnt = 1
    
    if cnt >= m:
        result += 1

print(result)