n = int(input())
arr = [list(map(int, input().split())) for _ in range(n)]
r, c = map(int, input().split())

bomb = arr[r-1][c-1]
dxs, dys = [-1, 0, 1, 0], [0, -1, 0, 1]

def in_range(x, y):
    return 0 <= x < n and 0 <= y < n

# 폭탄 터트리기
for i in range(0, bomb):
    if i == 0:
        arr[r-1][c-1] = 0
    else:
        for dx, dy in zip(dxs, dys):
            next_x, next_y = (r-1) + dx * i, (c-1) + dy * i
            if in_range(next_x, next_y):
                arr[next_x][next_y] = 0


temp = [[0] * n for _ in range(n)]
BLANK = 0


for col in range(n):
    for row in range(n-1, -1, -1):
        temp[row][col] = BLANK



# 배열 채우기
for col in range(n):
    temp_row = n-1
    for row in range(n-1, -1, -1):
        if arr[row][col] != BLANK:
            temp[temp_row][col] = arr[row][col]
            temp_row -= 1


# temp를 arr에 복사
for col in range(n):
    for row in range(n):
        arr[row][col] = temp[row][col]

#print
for row in range(n):
    for col in range(n):
        print(arr[row][col], end=' ')
    print()